import { Message } from './Message';
import { User } from './User';

interface Room {
    roomId: string;
    users: User[];
    messages: Message[];
}

export { Room };
