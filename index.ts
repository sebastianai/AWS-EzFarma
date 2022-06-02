
import ApplicationServer from './server/server';

const startApp = async() =>{
    const server = new ApplicationServer();
    server.listen();
}    

startApp();

