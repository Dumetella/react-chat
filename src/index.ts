import express from 'express';
import config from './config.js';
import Logger from 'log4js';
import { WebSocketServer } from 'ws';
import { Server } from 'http';
import MainServer from './components/MainServer.js';
import { database } from './components/DataBase.js';


async function main(): Promise<void> {
    config.check();
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

    //db

    const db = new database();

    const mainserver = new MainServer(wss, db);

    mainserver.Listen();

    // proper shutdown on Ctrl+C and kill
    const onProcessSignal = async (signal: NodeJS.Signals) => {
        logger.info('Got signal', signal);
        await new Promise<void>((r) => http.close((err) => {
            if (err) {
                console.log('Server fail?', err);
            }
            r();
        }));
        await new Promise<void>((r) => wss.close((err) => {
            if (err) {
                console.log('???', err);
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
        process.exit(0);
    };
    process.on('SIGTERM', onProcessSignal);
    process.on('SIGINT', onProcessSignal);
}

main().catch(e => console.error('Fatal error:', e));
