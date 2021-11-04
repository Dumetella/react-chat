import ChatMessage from './ChatMessage';
import SysMessage from './SysMessage';

interface SysMessageType {
    type: 'SYS'
    payload: SysMessage
}

interface ChatMessageType {
    type: 'CHAT'
    payload: ChatMessage
}

type SocketMessage =
    SysMessageType |
    ChatMessageType;

export default SocketMessage;
