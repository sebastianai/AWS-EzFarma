import {Request,Response,NextFunction} from 'express';
import {  verify } from 'jsonwebtoken';

export const verifyToken = (req:Request,res:Response,next:NextFunction) => {
    const token = req.header('token');

    if(!token){
        return res.status(401).json({
            msg:'Ningun token encontrado'
        })
    };

    if(!verify(token,process.env.JWT_KEY!)){
        return res.status(401).json({
            msg:'Token invalido encontrado'
        })
    };

    next();
}
