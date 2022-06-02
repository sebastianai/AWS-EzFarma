import { Request,Response } from "express";
import { mySQL } from '../database/db'

const db = mySQL;

export const getProducts = async(req:Request,res:Response) =>{
    try {
        const page = req.query.page || '0';
        const productsPerPage:number = 30;
        const from  = (Number(page) == 0) ? 0 : Number(page) * productsPerPage +1
        const query = await db.selectAll('Catalogo_Producto',from,productsPerPage) as [any]
        return res.json({
            count:query.length,
            results:query,
            ok:true
        })
    } catch (error) {
        return res.status(500).json({
            msg:error,
            ok:false
        })
    }
}

export const getProductById = (req:Request,res:Response) =>{
    try {
        const id = req.params.id;
    } catch (error) {
        return res.status(500).json({
            msg:error,
            ok:false
        })
    }
}