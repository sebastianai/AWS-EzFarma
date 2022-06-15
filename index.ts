
import ApplicationServer from './server/server';

const startApp =() =>{
    const server = new ApplicationServer();
    server.listen();
}    

startApp();

