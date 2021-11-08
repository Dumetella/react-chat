import ChatUser from './ChatUser';

interface Message {
    sender: ChatUser;
    date: Date;
    text: string;
};

export { Message };
