import ChatRoom from './Model/ChatRoom';

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

type SysMessage = RoomJoinRequest | RoomJoinGranted | RoomJoinDeclined;

export default SysMessage;

