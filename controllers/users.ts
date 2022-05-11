import { Request, Response } from 'express';
import  { PutItemCommand, GetItemCommand }  from '@aws-sdk/client-dynamodb';

import db from '../database/db';
import { newQuery } from '../database/interfaces';

import { User } from 'models/User';
import { bcrypt} from '../helpers';

export const createUser = async(req:Request<{},{},User>, res:Response) => {
    let {email,password,role} = req.body;

    password = bcrypt.encryptPassword(password);

    const user:User = {
        email,
        password,
        role
    }
    const params:newQuery = {
        TableName:'Users',
        Item:{
            "email":{
                S:user.email
            },
            "passoword":{
                S:user.password
            },
            "role":{
                M: JSON.stringify(user.role)
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