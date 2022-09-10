import { Request } from "express-validator/src/base";

export const getAccessToken = (cookies:object,req:Request) =>{
    if(!cookies){
        throw Error('Ningún token de acceso')
    }
    const access_token = Object.entries(cookies).find(([key,value]) => {
        return key.includes('accessToken')
    })?.[1]
    if(!access_token) throw Error('Ningun token de acceso')
    req.token = access_token;
    return true
}

export const sortCriteries = (req:Request) => {
    if(req.query?.order){
        if(!req.query?.sort){
            throw Error('No se especifico el orden')
        }
    }
    return true
}