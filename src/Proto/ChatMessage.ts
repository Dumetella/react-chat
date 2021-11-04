import { Message } from '../Model/Message';
import { User } from '../Model/User';

//sv -> ALL cl in RoomID
interface UserJoined {
    type: 'USER_JOINED';
    payload: {
        user: User;
    }
}
//sv -> all members in room
interface UserDisconected {
    type: 'USER_DISCONECTED';
    payload: {
        user: User;
    }
}
//cl -> sv 
interface MessageSent {
    type: 'MESSAGE_SENT';
    payload: {
        text: string;
    }
}
/**
 * Sent by server to all room members
 */
interface MessageRecieved {
    type: 'MESSAGE_RECIEVED';
    payload: {
        message: Message;
    }
}


type ChatMessage =
    UserJoined | MessageRecieved | MessageSent | UserDisconected;

export default ChatMessage;
