import {  verify } from 'jsonwebtoken';

export const verifyToken = (token:string) => {
    if(!token){
        throw Error('Ningun token encontrado')
    };

    if(!verify(token,process.env.JWT_KEY!)){
        throw Error(
            'Token invalido encontrado'
        )
    };

    return true;
}
