import express,{ Application, Request, Response } from 'express';
import cookies from 'cookie-parser';
import cors from 'cors';
import path from 'path';

import {userRoutes, pharmacyRoutes, marketPlaceRoutes, adminRoutes} from '../routes'

export default class Server {
    private express:Application;

    constructor(){
        this.express = express();


        this.middlewares();
        this.routes();
    }

    private middlewares(){
        this.express.use(cors({origin:'http://localhost:4200', credentials:true}));
        this.express.use(cookies());
        this.express.use(express.json());
        this.express.use(express.static('public'));

    }
    
    private routes(){
        this.express.use('/api/users',userRoutes);
        this.express.use('/api/pharmacy',pharmacyRoutes);
        this.express.use('/api/marketplace',marketPlaceRoutes);
        this.express.use('/api/admin',adminRoutes);
        
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