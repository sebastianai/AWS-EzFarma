import { sign } from "jsonwebtoken"

export const createJWT  = (payload:string) => {
    return new Promise((resolve,reject) =>{
        sign(payload,process.env.JWT_KEY!,{
            expiresIn:'4h'
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
