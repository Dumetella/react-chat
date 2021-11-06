import EventEmitter from 'events';
import WebSocket from 'ws';
import { ConnectionState } from '../Enum/ConnectionState.js';
import log4js from 'log4js';
import User from '../Model/User.js';
import ChatMessage from '../Proto/ChatMessage.js';
import SocketMessage from '../Proto/SocketMessage.js';

class Client extends EventEmitter {
    public State: ConnectionState;
    public User?: User;

    private logger: log4js.Logger;
    private readonly socket: WebSocket;
    private readonly id: string;
    constructor(socket: WebSocket, id: string) {
        super();
        this.logger = log4js.getLogger('Client');
        this.socket = socket;
        this.id = id;
        this.State = ConnectionState.Connnected;

        this.socket.on('message', (data) => this.dispatchMessageRaw(data));
    }

    public get Id(): string {
        return this.id;
    }

    public Close(): void {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.close(1000, 'Connection closed');
        }
        this.State = ConnectionState.Disconnected;
    }

    public async Send(msg: SocketMessage): Promise<void> {
        await new Promise<void>((resolve, reject) => {
            this.socket.send(JSON.stringify(msg), (e) => {
                if (e) {
                    reject(e);
                }
                resolve();
            });
        }).then(() => {
            this.logger.debug('<', this.id, msg);
        }).catch(e => {
            this.logger.error('!', this.id, e);
        });
    }

    private dispatchMessageRaw(data: WebSocket.Data): void {
        if (this.State === ConnectionState.Disconnected) {
            this.logger.error('?', this.Id, 'got message from disconnected client, ignoring', data.toString());
            return;
        }
        try {
            const msg = JSON.parse(data.toString());
            this.dispatchMessage(msg);
        } catch (e) {
            this.logger.error('Invalid data from socket', this.id, data.toString());
        }
    }

    private async dispatchMessage(msg: ChatMessage): Promise<void> {
        this.logger.debug('>', this.id, msg);
        this.emit('msg', msg);
    }
}

export default Client;
