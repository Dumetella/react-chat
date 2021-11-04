import log4js from 'log4js';
import { Room } from '../Model/Room';
import ChatMessage from '../Proto/ChatMessage';
import Client from './Client';


class ChatManager {
    private rooms: Room[];
    private lastChatId: number;
    private logger: log4js.Logger;
    constructor() {
        this.rooms = [];
        this.lastChatId = 1;
        this.logger = log4js.getLogger('ChatManager');
    }

    public async DispatchMessage(cl: Client, msg: ChatMessage): Promise<void> {
        switch (msg.type) {
            case 'ROOM_CREATE':
                this.logger.info(cl.Id, 'Created new chat', msg.payload.roomId);
                await this.createRoom(cl, msg.payload.roomId);
                break;
            case 'ROOM_JOIN':
                this.logger.info('[CHAT]', cl.Id, 'Tryed to join chat', msg.id);
                await this.joinRoom(cl, msg.id);
                break;
            case 'MESSAGE_RECIEVED':
                this.logger.info('[CHAT]', cl.Id, 'Message', msg.msg, 'to', msg.to);
                await this.sendMessage(cl, msg.to, msg.msg);
                break;
            default:
                break;
        }
    }

    public async OnClientDisconnected(cl: Client): Promise<void> {
        const tasks = this.rooms
            .filter(room => room.users.some(u => u.User.Id === cl.User.Id))
            .map(room => this.leaveRoom(cl, room.id));
        await Promise.all(tasks);
    }


    private async createRoom(cl: Client, name: string): Promise<void> {
        const r: ChatRoom = {
            id: (this.lastChatId++).toString(),
            name,
            users: [cl],
        };
        this.rooms.push(r);

        await cl.Send({
            type: 'CHAT',
            payload: {
                type: 'created',
                id: `#${r.id}`,
                name: r.name,
            }
        });
    }

    private async joinRoom(cl: Client, id: string): Promise<void> {
        id = id.substring(1);

        const room = this.rooms.find(c => c.id === id);
        if (!room) {
            return;
        }

        room.users.push(cl);
        await this.broadcast(room, {
            type: 'joined',
            to: id,
            user: {
                id: cl.User.Id,
                name: cl.User.Name,
            }
        });
    }

    private async sendMessage(cl: Client, id: string, msg: string): Promise<void> {
        const chType = id[0];
        id = id.substring(1);

        switch (chType) {
            // public room
            case '#':
                {
                    const room = this.rooms.find(c => c.id === id);
                    if (!room) {
                        return;
                    }
                    await this.broadcast(room, {
                        type: 'msg',
                        from: {
                            id: cl.User.Id,
                            name: cl.User.Name,
                        },
                        to: id,
                        msg,
                    });
                }
                break;
            case '@':
                // private
                break;
            case '%':
                // lobby/game
                break;
            default:
                break;
        }
    }


    private async broadcast(room: Room, msg: ChatMessage): Promise<void> {
        await Promise.all(room.users.map(c => c.Send({
            type: 'chat',
            msg,
        })));
    }
}

export default ChatManager;
