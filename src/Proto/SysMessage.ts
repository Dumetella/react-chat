import ChatRoom from './Model/ChatRoom';


//cl -> sv
interface LoginRequestMessage {
    type: 'LOGIN_REQUEST';
    payload: {
        name: string;
        roomId: string;
    }
}

//sv -> cl
interface LoginRequestGranted {
    type: 'LOGIN_GRANTED';
    payload: {
        response: 'OK';
    }
}

//sv -> cl
interface LoginRequestDeclined {
    type: 'LOGIN_DECLINED';
    payload: {
        response: 'NO';
    }
}
//cl -> sv
interface RoomJoinRequest {
    type: 'JOIN_ROOM';
    payload: {
        roomId: string;
    }
}
//sv -> cl
interface RoomJoinResponse {
    type: 'ROOM_JOINED';
    payload: {
        room: ChatRoom;
    }
}

type SysMessage = LoginRequestMessage | LoginRequestGranted | LoginRequestDeclined | RoomJoinRequest | RoomJoinResponse;

export default SysMessage;

