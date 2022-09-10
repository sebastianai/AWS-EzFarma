import { Request, Response } from "express";
import { AdminGetUserCommand, AdminGetUserCommandInput, GetUserCommand, GetUserCommandInput } from "@aws-sdk/client-cognito-identity-provider";
import { PutObjectCommand, PutObjectCommandInput } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import aws from '../AWS';
import { files } from '../helpers'

const cognito = aws.Cognito;
export const updateMaster = async(req:Request,res:Response) => {
    try {
        const {sheet,category, venta}  = req.query;
        const file = (req.files || [req.file]) as Express.Multer.File[] 
        //Verificar usuario admin
        // const token = req.headers.authorization?.split(' ')[1];
        // let params: GetUserCommandInput | AdminGetUserCommandInput = {
        //     AccessToken: token
        // }
        // const user = await cognito.send( new GetUserCommand(params))
        // params = {
        //     Username:user.Username,
        //     UserPoolId:process.env.ADMIN_USER_POOL_ID
        // }
        // const isAdmin  = await cognito.send( new AdminGetUserCommand(params))
        // if(!isAdmin) return res.status(403).end()
        file.forEach(async(file) => {
            const csv = files.transformExcelToCsv(file.buffer,sheet as string,(err:string) => {
                if(err){
                    console.log(err)
                    return res.status(500).json({
                        msg:err,
                        ok:false
                    })
                }
            },venta as string,category as string);
            const params:PutObjectCommandInput = {
                Bucket:'ezf-master',
                Key:'master.csv',
                Body:csv
            }
            const parallelUpload = new Upload({
                client:aws.S3,
                params,
                partSize:1024 * 1024 * 5,
                leavePartsOnError: false
            })
            const data = await parallelUpload.done();
            return res.json({
                data,
                ok:true
            })
        })
    } catch (error) {
        return res.status(403).json({
            msg:error,
            ok:false
        })
    }
}