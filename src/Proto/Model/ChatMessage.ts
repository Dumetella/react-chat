import ChatUser from './ChatUser';

interface ChatMessage {
    sender: ChatUser;
    date: string;
    text: string;
};

export { ChatMessage };
