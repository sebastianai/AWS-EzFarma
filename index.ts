import * as dot from 'dotenv';
import ApplicationServer from './server/server';

dot.config();

const server = new ApplicationServer();

server.listen();


