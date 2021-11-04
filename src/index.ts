import express from 'express';
import config from './config.js';
import Logger from 'log4js';
import { WebSocketServer } from 'ws';
import { Server } from 'http';


async function main(): Promise<void> {
    config.check();

    const MOCK_DATA = {
        'type': 'SET_DATA',
        'room': 'TEST',
        'users': ['Aboba', 'Foo', 'Bar'],
        'messages': ['Dota2', 'The Best', 'Game ever']
    };

    Logger.configure('./logger_config.json');
    const logger = Logger.getLogger('main');

    const app = express();
    app.use(express.json());
    app.use(express.static(config.get().WWW_ROOT));

    const http = new Server();

    http.listen(config.get().LISTEN_PORT);
    http.on('listening', () => {
        logger.info(`Server listening on ${config.get().LISTEN_PORT}`);
    });
    http.on('request', app);

    //headless ws server
    const wss = new WebSocketServer({ server: http });

    wss.on('connection', socket => {

        logger.info('Someone connected');


        socket.on('message', (message) => {

            const abobus = JSON.parse(message.toString());

            switch (abobus.type) {
                case 'LOGIN_REQUEST':
                    socket.send('LOGIN_ACCEPTED');
                    break;
                case 'SET_DATA':
                    socket.send(JSON.stringify(MOCK_DATA));
                    break;
                case 'SET_USERS':
                    socket.send(JSON.stringify(MOCK_DATA.users));
                    break;
                case 'NEW_MESSAGE':
                    socket.send(JSON.stringify(MOCK_DATA));
                    break;
                default:
                    socket.send('Incorrect request?');
                    break;
            }
        });
    });

    // proper shutdown on Ctrl+C and kill
    const onProcessSignal = async (signal: NodeJS.Signals) => {
        logger.info('Got signal', signal);
        await new Promise<void>((r) => http.close((err) => {
            if (err) {
                console.log('Server fail?', err);
            }
            r();
        }));
        logger.info('Bye...');
        await new Promise<void>((r) => {
            Logger.shutdown((err) => {
                if (err) {
                    console.log('Logger fail?', err);
                }
                r();
            });
        });
    };
    process.on('SIGTERM', onProcessSignal);
    process.on('SIGINT', onProcessSignal);
}

main().catch(e => console.error('Fatal error:', e));
