import log4js from 'log4js';
import ChatMessage from '../Proto/ChatMessage';
import ChatRoom from '../Proto/Model/ChatRoom';
import Client from './Client';


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
            .filter(room => room.users.some(u => u.id === cl.User.Id))
            .map(room => this.leaveRoom(cl, room.id));
        await Promise.all(tasks);
    }

    private async leaveRoom(cl: Client, id: string): Promise<void> {
        this.logger.info('zhopa');
    }
}

export default ChatManager;


// case 'MESSAGE_RECIEVED':
//     this.logger.info('[CHAT]', cl.Id, 'Message', msg.msg, 'to', msg.to);
//     await this.sendMessage(cl, msg.to, msg.msg);
//     break;
