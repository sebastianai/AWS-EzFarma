import { Request, Response } from 'express';
import { AdminCreateUserCommand,AdminCreateUserCommandInput, GetUserCommand, GetUserCommandInput } from '@aws-sdk/client-cognito-identity-provider';
import aws from '../AWS';
import { User } from 'models/User';

const cognito = aws.Cognito;

export const getUserInfo =async (req:Request,res:Response) => {
    try {
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const params:GetUserCommandInput ={
            AccessToken:token
        }
        const user = await cognito.send(new GetUserCommand(params));
        let userData:{[key:string]:string} = {}
        user.UserAttributes?.filter((att) => att.Name != 'sub').forEach((att) => {
            const key = att.Name?.split(':').at(-1) as string;
            userData[key] = att.Value as string
         })
        return res.json({
            data:userData,
            ok:true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false
        })
    }
}

export const createUser = async(req:Request<{type:string},{},User>, res:Response) => {
    const pool = req.params.type
    let {email,password,role,address} = req.body;
    const user:User = {
        email,
        password,
        role,
        address
    }
    let userPool:string | undefined = undefined
    switch(pool){
        case 'Farmacias':
            userPool = process.env.FARMACIAS_USER_POOL_ID
            break;
        case 'Droguerias':
            userPool = process.env.DROGUERIAS_USER_POOL_ID
            break;
        case 'Admins':
            userPool = process.env.ADMIN_USER_POOL_ID
            break;
        default:
            return res.status(400).json({
                msg:'Ningún grupo valido ingresado',
                ok:false
            })
        }
    if(!userPool) throw Error('Id de Grupo no definido')
    const params:AdminCreateUserCommandInput = {
        UserPoolId:userPool,
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
                Name:'address',
                Value:user.address
            },
            {
                Name:'custom:enterpriseName',
                Value:user.role.enterpriseName
            },
            {
                Name:'custom:custom:RUT',
                Value:user.role.rut
            },
            {
                Name:'custom:Rol',
                Value:pool
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

export const logout = (req:Request,res:Response) =>{
    return res.clearCookie('').status(200).end()
}