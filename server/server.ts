import express,{ Application, Request, Response } from 'express';
import { Server as Socket } from 'socket.io';
import {Server as http,createServer} from 'http';
import cookies from 'cookie-parser';
import cors from 'cors';
import path from 'path';

import {userRoutes, pharmacyRoutes, marketPlaceRoutes, adminRoutes} from '../routes'

class Server {
    private express:Application;
    private http:http;
    public socket:Socket

    constructor(){
        this.express = express();
        this.http = createServer(this.express)
        this.socket = new Socket(this.http,{
            cors:{
                origin:'*'
            }
        })

        this.middlewares();
        this.routes();
    }

    private middlewares(){
        this.express.use(cors({origin:['http://localhost:4201','http://localhost:4200'], credentials:true}));
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
            res.sendFile(path.resolve(__dirname,'../public/index.html'));
        })
    }

    public listen(){
        this.socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
          });
        this.http.listen(process.env.SOCKET_PORT, () => {
            console.log('Socket inicializado - PORT:',process.env.SOCKET_PORT);
        })
        this.express.listen(process.env.PORT,() => {
            console.log(`Servidor inicialiado - PORT: ${process.env.PORT}`);
        })
    }
}

const server = new Server();
export default server;