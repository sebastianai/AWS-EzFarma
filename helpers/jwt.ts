import { sign,decode, JwtPayload, JsonWebTokenError } from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config()

export const createJWT  = (...payload:string[]) => {
    return new Promise((resolve,reject) =>{
        sign({payload},process.env.JWT_KEY!,{
            expiresIn:process.env.JWT_EXPIRE
        },(err,token) =>{
            if(err){
                console.error(err)
                reject('The token was not created')
            }else{
                resolve(token)
            }
        })
    })
}

export const checkExpJWT = (token:string) => {
    const jwt = decode(token) as JwtPayload
    const now = Math.floor(Date.now() / 1000)
    if(jwt.exp! < now){
        return false
    }
    return true
}
