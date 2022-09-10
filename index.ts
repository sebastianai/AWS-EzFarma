
import ApplicationServer from './server/server';

const startApp =() =>{
    const server = ApplicationServer;
    server.listen();
}    

startApp();

