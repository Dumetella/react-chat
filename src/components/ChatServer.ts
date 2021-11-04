import { IncomingMessage } from 'http';
import { v4 } from 'uuid';
import WebSocket, { Server } from 'ws';
import { ConnectionState } from '../Enum/ConnectionState';
import log4js from 'log4js';
import { User } from '../Model/User';
import ChatManager from './ChatManager';
import Client from './Client';
import SocketMessage from '../Proto/SocketMessage';
import SysMessage from '../Proto/SysMessage';

class GameServer {
    private port: number;
    private db: [];
    private socket: Server;
    private logger: log4js.Logger;

    /**
     * Maps connection id to client
     */
    private clients: ClientCollection;

    /**
     * Maps user's public id to socket connection id 
     */
    private loggedIn: string[];

    private chatManager: ChatManager;

    constructor(port: number, database) {
        this.port = port;
        this.db = database;
        this.clients = {};
        this.loggedIn = [];
        this.logger = log4js.getLogger('ChatServer');

        this.chatManager = new ChatManager();
    }

    public Listen(): void {
        this.socket = new Server({
            port: this.port
        });

        this.socket.on('connection', (s, m) => this.OnClientConnected(s, m));
    }

    public async Close(): Promise<void> {
        await new Promise<void>((resolve, reject) => {
            this.socket.close((e) => {
                if (e) {
                    reject(e);
                }
                resolve();
            });
        });
    }

    private OnClientConnected(sClient: WebSocket, message: IncomingMessage): void {
        const clId = v4();
        this.logger.info('+ Client', clId);
        this.clients[clId] = new Client(sClient, clId);
        sClient.on('close', (code: number, reason?: string) => {
            this.logger.info('- Client', clId, `[${code}]:${reason}`);
            this.chatManager.OnClientDisconnected(this.clients[clId]);
            if (this.clients[clId].State === ConnectionState.LoggedIn) {
                this.loggedIn = this.loggedIn.filter(c => c !== this.clients[clId].User.Id);
            }
            this.clients[clId].Close();
            delete this.clients[clId];
        });
        this.clients[clId].on('msg', (m) => this.DispatchClientMessage(this.clients[clId], m));
    }

    private async DispatchClientMessage(cl: Client, msg: SocketMessage): Promise<void> {
        try {
            if (msg.type === 'SYS') {
                this.DispatchSystemMessage(cl, msg.payload);
                return;
            }
            if (cl.State !== ConnectionState.LoggedIn) {
                this.logger.info('?', cl.Id, 'User not logged in', msg);
                return;
            }
            if (msg.type === 'CHAT') {
                await this.chatManager.DispatchMessage(cl, msg.payload);
            }
        } catch (e) {
            this.logger.error('!', cl.Id, 'failed to dispatch message', msg, e);
        }
    }

    private async DispatchSystemMessage(cl: Client, msg: SysMessage): Promise<void> {
        switch (msg.type) {
            case 'JOIN_ROOM':
                cl.Send({
                    type: 'SYS',
                    payload: {
                        type: 'LOGIN_GRANTED',
                        payload: {
                            response: 'OK'
                        }
                    }
                });
                break;
            case 'LOGIN_REQUEST':
                if (await this.canLogin(cl, msg.id)) {
                    await this.login(cl, msg.id, msg.name);
                }
                break;
            case 'ds'
                cl.State = ConnectionState.Disconnected;
                this.logger.info('_', cl.Id, 'Disconnected with message', msg.reason);
                // Notify other clients?
                cl.Close();
                break;
            default:
                break;
        }
    }


    private async login(cl: Client, loginId: string, name: string): Promise<void> {
        cl.State = ConnectionState.LoggedIn;
        this.loggedIn.push(loginId);

        let userEnt = await this.db.TryGetUser(loginId);
        if (!userEnt) {
            userEnt = await this.db.AddUser(loginId, {});
        }

        this.logger.info('[LOGIN]', cl.Id, 'logged in with (private, public)', loginId, userEnt.publicId);
        cl.User = new User(userEnt.publicId, name);
        await cl.Send({
            type: 'sys',
            msg: {
                type: 'login-response',
                success: true,
                user: {
                    id: userEnt.publicId,
                },
            },
        });
    }
}

interface ClientCollection {
    [id: string]: Client
}

export default GameServer;
