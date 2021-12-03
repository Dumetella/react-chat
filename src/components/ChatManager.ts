import log4js from 'log4js';
import User from '../Model/User.js';
import ChatMessage from '../Proto/ChatMessage.js';
import Client from './Client.js';


class ChatManager {
    private rooms: ChatRoom[];
    private lastUserId: number;
    private logger: log4js.Logger;
    constructor() {
        this.rooms = [];
        this.lastUserId = 1;

        this.logger = log4js.getLogger('ChatManager');
    }

    public async DispatchMessage(cl: Client, msg: ChatMessage): Promise<void> {
        switch (msg.type) {
            case 'ROOM_JOIN':
                await this.joinRoom(cl, msg.payload.name, msg.payload.roomId);
                break;
            case 'MESSAGE_SENT':
                await this.transferMessage(cl, msg.payload.text);
                break;
            default:
                break;
        }
    }
    async transferMessage(cl: Client, text: string): Promise<void> {
        const r = this.rooms.find(c => c.users.some(e => e.User.Id === cl.User.Id));
        if (!r) {
            return;
        }
        await this.broadcast(r, {
            type: 'MESSAGE_RECIEVED',
            payload: {
                message: {
                    date: new Date(),
                    sender: {
                        id: cl.User.Id,
                        name: cl.User.Name
                    },
                    text: text
                }
            }
        });
    }

    public async OnClientDisconnected(cl: Client): Promise<void> {
        if (!cl.User) {
            return;
        }
        const tasks = this.rooms
            .filter(room => room.users.some(u => u.User.Id === cl.User.Id))
            .map(room => this.leaveRoom(cl, room.id));
        await Promise.all(tasks);
    }

    private createRoom(cl: Client, roomId: string): ChatRoom {
        const r: ChatRoom = {
            id: roomId,
            users: [],
        };
        this.rooms.push(r);
        return r;
    }

    private async joinRoom(cl: Client, name: string, id: string): Promise<void> {
        const roomId = id.toLowerCase().trim();
        cl.User = new User((this.lastUserId++).toString(), name);
        const room = this.rooms.find(c => c.id === roomId) || this.createRoom(cl, roomId);

        await this.broadcast(room, {
            type: 'USER_JOINED',
            payload: {
                user: {
                    id: cl.User.Id,
                    name: cl.User.Name
                }
            }
        });
        room.users.push(cl);
        cl.Send({
            type: 'CHAT',
            payload: {
                type: 'ROOM_GRANTED',
                payload: {
                    room: {
                        id: room.id,
                        users: room.users.map(c => {
                            return {
                                id: c.User.Id,
                                name: c.User.Name
                            };
                        })
                    }
                }
            }
        });
    }

    private async leaveRoom(cl: Client, id: string): Promise<void> {
        const r = this.rooms.find(c => c.id === id);
        if (!r) {
            return;
        }
        if (!r.users.some(c => c.User.Id === cl.User.Id)) {
            return;
        }
        r.users = r.users.filter(c => c.User.Id !== cl.User.Id);
        await this.broadcast(r, {
            type: 'USER_DISCONECTED',
            payload: {
                user: {
                    id: cl.User.Id,
                    name: cl.User.Name,
                }
            }
        });
    }

    private async broadcast(room: ChatRoom, msg: ChatMessage): Promise<void> {
        await Promise.all(room.users.map(c => c.Send({
            type: 'CHAT',
            payload: msg
        })));
    }
}

interface ChatRoom {
    id: string
    // references to Client
    users: Client[]
}

export default ChatManager;
