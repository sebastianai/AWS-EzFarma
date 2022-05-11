import {Request,Response} from 'express';

export const uploadList = (req:Request,res:Response) =>{
    console.log(req.file)
    return res.json({
        msg:'ok'
    })
}