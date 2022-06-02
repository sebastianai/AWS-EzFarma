import { Request, Response } from 'express';
import { AdminCreateUserCommand,AdminCreateUserCommandInput } from '@aws-sdk/client-cognito-identity-provider';
import aws from '../AWS';
import { User } from 'models/User';

export const createUser = async(req:Request<{},{},User>, res:Response) => {
    const cognito = aws.Cognito;
    const pool = (req.params)
    let {email,password,role} = req.body;
    const user:User = {
        email,
        password,
        role
    }
    const params:AdminCreateUserCommandInput = {
        UserPoolId:process.env.FARMACIAS_USER_POOL_ID,
        Username:user.email,
        TemporaryPassword:`${user.role.enterpriseName.slice(0,3)}@Ezf${new Date().getDate()}`,
        UserAttributes:[
            {
                Name:'email',
                Value:user.email
            },
            {
                Name:'name',
                Value:user.role.name
            },
            {
                Name:'custom:enterpriseName',
                Value:user.role.enterpriseName
            },
            {
                Name:'custom:RUT',
                Value:user.role.rut
            }
        ]
    }
    try{
        const result = await cognito.send(new AdminCreateUserCommand(params));
       return res.json({
           msg:"Operacion exitosa",
           data:result,
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

export const login = (req:Request,res:Response) =>{
    const token = req.headers.authorization?.split(' ')[1] as string
    return res.cookie('token',token).status(200).send('OK')
}