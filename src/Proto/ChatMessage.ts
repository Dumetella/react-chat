import ChatRoom from './Model/ChatRoom';
import ChatUser from './Model/ChatUser';
import { Message } from './Model/Message';

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
        message: Message;
    }
}

//cl -> sv
interface RoomJoinRequest {
    type: 'ROOM_JOIN';
    payload: {
        name: string;
        roomId: string;
    }
}
//sv -> cl
interface RoomJoinGranted {
    type: 'ROOM_GRANTED';
    payload: {
        room: ChatRoom;
    }
}

interface RoomJoinDeclined {
    type: 'ROOM_DECLINED';
    payload: {
        reason: '?'
    }
}


type ChatMessage =
    UserJoined | MessageRecieved | MessageSent | UserDisconected | RoomJoinRequest | RoomJoinGranted | RoomJoinDeclined;

export default ChatMessage;
