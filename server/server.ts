import express,{ Application, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

import {userRoutes, pharmacyRoutes} from '../routes'

export default class Server {
    private express:Application;

    constructor(){
        this.express = express();


        this.middlewares();
        this.routes();
    }

    private middlewares(){
        this.express.use(cors());
        this.express.use(express.json());
        this.express.use(express.static('public'));

    }
    
    private routes(){
        this.express.use('/api/users',userRoutes);
        this.express.use('/api/pharmacy',pharmacyRoutes);
        
        //Angular Routes
        this.express.get('*',(req:Request,res:Response) => {
            res.sendFile(path.resolve(__dirname,'../public/index.html'))
        })
    }

    public listen(){
        this.express.listen(process.env.PORT,() => {
            console.log(`Servidor inicialiado - PORT: ${process.env.PORT}`)
        })
    }
}