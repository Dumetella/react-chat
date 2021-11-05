import { ChatRoomId } from '../ProtoTypes';
import ChatUser from './ChatUser';

interface ChatRoom {
    id: ChatRoomId
    users: ChatUser[]
}

export default ChatRoom;
