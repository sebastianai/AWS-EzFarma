import express,{ Application } from 'express';
import cors from 'cors';

export default class Server {
    private express:Application;

    constructor(){
        this.express = express();


        this.middlewares();
    }

    private middlewares(){
        this.express.use(cors());
        this.express.use(express.json());
        this.express.use(express.static('public'));
    }

    private routes(){
        this.express.use('/api/users')
    }

    public listen(){
        this.express.listen(process.env.PORT,() => {
            console.log(`Servidor inicialiado - PORT: ${process.env.PORT}`)
        })
    }
}