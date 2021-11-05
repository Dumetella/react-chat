import ChatUser from './Model/ChatUser';

//sv -> ALL cl in RoomID
interface UserJoined {
    type: 'USER_JOINED';
    payload: {
        user: ChatUser;
    }
}
//sv -> all members in room
interface UserDisconected {
    type: 'USER_DISCONECTED';
    payload: {
        user: ChatUser;
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
        message: ChatMessage;
    }
}


type ChatMessage =
    UserJoined | MessageRecieved | MessageSent | UserDisconected;

export default ChatMessage;
