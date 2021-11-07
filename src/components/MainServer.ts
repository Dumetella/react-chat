import { IncomingMessage } from 'http';
import { v4 } from 'uuid';
import WebSocket, { Server } from 'ws';
import { ConnectionState } from '../Enum/ConnectionState.js';
import log4js from 'log4js';
import ChatManager from './ChatManager.js';
import Client from './Client.js';
import SocketMessage from '../Proto/SocketMessage.js';
import SysMessage from '../Proto/SysMessage.js';
import { database } from './DataBase.js';

class MainServer {
    private db: database;
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

    constructor(socket: WebSocket.Server, db: database) {
        this.socket = socket;
        this.db = db;
        this.clients = {};
        this.loggedIn = [];
        this.logger = log4js.getLogger('ChatServer');

        this.chatManager = new ChatManager();
    }

    public Listen(): void {
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
            // if (cl.State !== ConnectionState.LoggedIn) {
            //     this.logger.info('?', cl.Id, 'User not logged in', msg);
            //     return;
            // }
            if (msg.type === 'CHAT') {
                await this.chatManager.DispatchMessage(cl, msg.payload);
            }
        } catch (e) {
            this.logger.error('!', cl.Id, 'failed to dispatch message', msg, e);
        }
    }

    private async DispatchSystemMessage(cl: Client, msg: SysMessage): Promise<void> {
        switch (msg) {

            default:
                break;
        }
    }



}

interface ClientCollection {
    [id: string]: Client
}

export default MainServer;
