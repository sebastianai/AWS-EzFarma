import { Request, Response } from 'express';
import { PutItemCommand, GetItemCommand, GetItemCommandInput, PutItemCommandInput } from '@aws-sdk/client-dynamodb';
import { decode, JwtPayload } from 'jsonwebtoken';
import { User } from 'models/User';

import db from '../database/db';

import { bcrypt} from '../helpers';
import { comparePassword } from '../helpers/bcrypt';
import { createJWT, checkExpJWT } from '../helpers/jwt';

export const createUser = async(req:Request<{},{},User>, res:Response) => {
    let {email,password,role} = req.body;

    password = bcrypt.encryptPassword(password);

    const user:User = {
        email,
        password,
        role
    }
    const params:PutItemCommandInput = {
        TableName:'Users',
        Item:{
            "email":{
                S:user.email
            },
            "password":{
                S:user.password
            },
            "role":{
                M: JSON.parse(JSON.stringify(user.role))
            }
        }
    }
    try {
       const data = await db.send(new PutItemCommand(params))
       return res.json({
           msg:"Operacion exitosa",
           data,
           ok:true
       });
    } catch (error) {
        console.error("Error",error)
        return res.status(500).json({
            msg:'Error en el servidor',
            ok:false
        })
    }



}

export const login = async(req:Request<{},{},User>,res:Response) =>{
    const {email,password} = req.body;

    const query:GetItemCommandInput = {
        TableName:'Users',
        Key:{
            "email":{
                S:email
            }
        }
    }

    const result = await db.send(new GetItemCommand(query))
    if(!result.Item?.password || !result.Item?.email){
        return res.status(502).json({
            msg:'Usuario invalido'
        })
    }
    if(!comparePassword(password,result.Item!.password.S!)){
        return res.status(400).json({
            msg:'Usuario o contraseñas inválidas',
            ok:false
        })
    }
    

    const token = await createJWT(result.Item!.email.S!,result.Item!.Role.M?.enterpriseName.S!)

    return res.json({
        token
    })
}

export const renewToken = async(req:Request,res:Response) => {
    const token = req.headers['token'] as string
    if(!checkExpJWT(token)){
        const {payload} = decode(token) as JwtPayload
        const newToken = await createJWT(payload[0])
        return res.json({
            token:newToken
        })
    }
    return res.json({
        token
    })
}