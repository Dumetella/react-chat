import ChatUser from './ChatUser';

interface Message {
    sender: ChatUser;
    date: string;
    text: string;
};

export { Message };
