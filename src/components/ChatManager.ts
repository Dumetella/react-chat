import log4js from 'log4js';
import ChatMessage from '../Proto/ChatMessage.js';
import Client from './Client.js';


class ChatManager {
    private rooms: ChatRoom[];
    private lastChatId: number;
    private logger: log4js.Logger;
    constructor() {
        this.rooms = [];
        this.lastChatId = 1;
        this.logger = log4js.getLogger('ChatManager');
    }

    public async DispatchMessage(cl: Client, msg: ChatMessage): Promise<void> {
        switch (msg.type) {

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
    }

    private async joinRoom(cl: Client, id: string): Promise<void> {

        id = id.substring(1);

        const room = this.rooms.find(c => c.id === id);

        if (!room) {
            this.createRoom(cl, name)
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

    private async leaveRoom(cl: Client, id: string): Promise<void> {
        this.logger.info('zhopa');
    }

    private async broadcast(room: ChatRoom, msg: ChatMessage): Promise<void> {
        await Promise.all(room.users.map(c => c.Send({
            type: 'CHAT',
            payload: 
        })));
    }
}

interface ChatRoom {
    id: string
    name: string
    // references to Client
    users: Client[]
}

export default ChatManager;


// case 'ROOM_JOIN':
//                 cl.Send({
//                     type: 'SYS',
//                     payload: {
//                         type: 'ROOM_GRANTED',
//                         payload: {
//                             room: {
//                                 id: msg.payload.roomId,
//                                 users: [{ name: msg.payload.name, id: '1' }]
//                             }
//                         }
//                     }
//                 });