import { Request, Response } from 'express';
import { AdminCreateUserCommand, AdminCreateUserCommandInput, AdminAddUserToGroupCommand, GetUserCommand, GetUserCommandInput, AdminConfirmSignUpCommand } from '@aws-sdk/client-cognito-identity-provider';
import aws from '../AWS';
import { User } from 'models/User';
import { mySQL } from '../database/db';

const cognito = aws.Cognito;
const db = mySQL;
export const getUserInfo = async (req: Request, res: Response) => {
    try {
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const params: GetUserCommandInput = {
            AccessToken: token
        }
        const user = await cognito.send(new GetUserCommand(params));
        let userData: { [key: string]: string } = {}
        user.UserAttributes?.filter((att) => att.Name != 'sub').forEach((att) => {
            const key = att.Name?.split(':').at(-1) as string;
            userData[key] = att.Value as string
        })
        return res.json({
            data: userData,
            ok: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false
        })
    }
}

export const createUser = async (req: Request<{ type: string }, {}, User>, res: Response) => {
    const group = req.params.type
    let { email, password, info, address } = req.body;
    const user: User = {
        email,
        password,
        info,
        address
    }

    const params: AdminCreateUserCommandInput = {
        UserPoolId: process.env.POOL_ID,
        Username: user.email,
        TemporaryPassword: `${user.info.enterpriseName.slice(0, 3)}@Cleppi${new Date().getDate()}`,
        UserAttributes: [
            {
                Name: 'email',
                Value: user.email
            },
            {
                Name: 'name',
                Value: user.info.name
            },
            {
                Name: 'address',
                Value: user.address
            },
            {
                Name: 'custom:enterpriseName',
                Value: user.info.enterpriseName
            },
            {
                Name: 'custom:rut',
                Value: user.info.rut
            }
        ]
    }
    try {
        const result = await cognito.send(new AdminCreateUserCommand(params));
        await cognito.send(new AdminAddUserToGroupCommand({
            GroupName: group,
            Username: result.User?.Username,
            UserPoolId: process.env.POOL_ID
        }))
        await new Promise((resolve, reject) => {
            db.db.query(`INSERT INTO ${group} (Nombre,RUT) VALUES (UPPER('${user.info.enterpriseName}'),UPPER('${user.info.rut}'));`, (err,data) => {
                if (err) reject(err);
                resolve(data)
            });
        })

        return res.json({
            msg: "Operacion exitosa",
            data: result,
            ok: true
        });
    } catch (error) {
        console.error("Error", error)
        return res.status(500).json({
            msg: 'Error en el servidor',
            ok: false
        })
    }
}
