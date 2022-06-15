import { Request, Response } from "express";
import { GetItemCommand, GetItemCommandInput, GetItemCommandOutput, UpdateItemCommand, UpdateItemCommandInput } from "@aws-sdk/client-dynamodb";
import { GetUserCommand, GetUserCommandInput } from "@aws-sdk/client-cognito-identity-provider";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import mysql from 'mysql';
import aws from "../AWS";

import { mySQL } from '../database/db'
import { Product, ProductCart } from "../models/Marketplace";
import { transformHTMLToPDF } from "../helpers/html-pdf";

const db = mySQL;
const cognito = aws.Cognito;
const dynamodb = aws.DynamoDB;

export const getProducts = async (req: Request, res: Response) => {
    try {
        const page = req.query.page || '1';
        const productsPerPage: number = 30;
        const from = (Number(page) == 1) ? 0 : (Number(page) - 1) * productsPerPage + 1
        const [query,count] = await db.selectAll('MARKET_Producto', from, productsPerPage)
        return res.json({
            count: count,
            range: [from, from + productsPerPage],
            data: query,
            ok: true
        })
    } catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        })
    }
}
export const getProductById = async (req: Request, res: Response) => {
    try {
        const id = req.query.id;
        const results = await new Promise<any>((resolve,reject) =>{
            
            db.db.query(`CALL detalle_producto(?)`,id,(err,data,fields) => {
                if(err){
                    return reject(err);
                }
                if(Array.isArray(data[0])){
                    return resolve(data[0]);
                }else{
                    return resolve([])
                }
            })
        })
        if (results.length === 0) {
            return res.status(404).json({
                msg: `Ningun producto encontrado con el id ${id}`,
                ok: false
            })
        }
        return res.json({
            data:results,
            ok: true
        })
    } catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        })
    }
}
export const getProductsByName = async (req: Request, res: Response) => {
    try {
        const name = req.query.name;
        const results = await new Promise<any>((resolve,reject) =>{
        const query = mysql.raw("'"+name+"%'");
            db.db.query(`SELECT PRODUCTO_ID, DESCRIPCION FROM Catalogo_Producto WHERE DESCRIPCION LIKE ?;`,query,(err,data,fields) => {
                if(err){
                    return reject(err);
                }
                    return resolve(data)
            })
        })
        return res.json({
            data:results,
            ok: true
        })
    } catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        })
    }
}
export const addToCart = async (req: Request<{},{},Product>, res: Response) => {
    try {
        const producto = req.body;
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        const user = await cognito.send(new GetUserCommand(userParams));
        const cartParams:GetItemCommandInput = {
            TableName:'Carro_Compra',
            Key:{
                'Username':{
                    S: user.Username!
                }
            },
            ProjectionExpression:'Productos'
        }
        //Obtener articulos del carrito
        let cart:GetItemCommandOutput = await dynamodb.send(new GetItemCommand(cartParams));
        let Productos: Product[] | [];
        if(!cart.Item || Object.entries(cart.Item!).length < 1){
            Productos = [];
        }else{
            Productos = unmarshall(cart.Item!).Productos as Product[]
        }
        if(Productos?.length > 0){
            const exists = Productos.find((p) => p.PRODUCTO_ID === producto.PRODUCTO_ID &&  p.DESCRIPCION === producto.DESCRIPCION)
            if(exists){
                exists.CANTIDAD = (exists.CANTIDAD || 0) + 1
            }else{
                producto.CANTIDAD = 1;
                Productos.push(producto)
            }
        }else{
            producto.CANTIDAD = 1;
            Productos.push(producto)
        }
        const newProductos = marshall(Productos)
        let updateCart:UpdateItemCommandInput = {
            TableName:'Carro_Compra',
            Key:{
                "Username":{
                    S:user.Username!
                }
            },
            UpdateExpression:"SET Productos = :p",
            ExpressionAttributeValues : { 
                ":p" : {
                    L: newProductos as unknown as []
                },
            },
            ReturnValues:'ALL_NEW'
        }
        const newCart = await dynamodb.send( new UpdateItemCommand(updateCart))
        return res.json({
            msg:'Producto añadido',
            data:unmarshall(newCart.Attributes!),
            ok:true
        })
    } catch (error) {
        return res.status(500).json({
            msg:error,
            ok:false
        })
    }
}
export const getCart = async (req: Request, res: Response) => {
    try {
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        const user = await cognito.send(new GetUserCommand(userParams));
        const cartParams:GetItemCommandInput = {
            TableName:'Carro_Compra',
            Key:{
                'Username':{
                    S:user.Username!
                }
            },
            ProjectionExpression:'Productos'
        }
        const cart = await dynamodb.send( new GetItemCommand(cartParams));

        return res.json({
            data:unmarshall(cart.Item!).Productos,
            ok:true
        })
    } catch (error) {
        return res.json({
            msg:error,
            ok:false
        })
    }
}
export const removeFromCart = async (req: Request<{},{},{producto:ProductCart}>, res: Response) => {
    try {
        const i = req.query.index as string
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        const user = await cognito.send(new GetUserCommand(userParams));
        const updateCart:UpdateItemCommandInput = {
            TableName:'Carro_Compra',
            Key:{
                "Username":{
                    S:user.Username!
                }
            },
            UpdateExpression:`REMOVE Productos[${i}]`,
            ConditionExpression:'attribute_exists(Productos)',
        }

        const result = await dynamodb.send(new UpdateItemCommand(updateCart))
        return res.json({
            msg:'Producto removido',
            data:result,
            ok:true
        })
    } catch (error) {
        return res.status(500).json({
            msg:error,
            ok:false
        })
    }
}
export const updateCart = async(req:Request,res:Response) => {
    try {
        const productos = marshall(req.body);
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        const user = await cognito.send(new GetUserCommand(userParams));
        let updateCart:UpdateItemCommandInput = {
            TableName:'Carro_Compra',
            Key:{
                "Username":{
                    S:user.Username!
                }
            },
            UpdateExpression:"SET Productos = :p",
            ExpressionAttributeValues : { 
                ":p" : {
                    L: productos as unknown as []
                },
            },
            ReturnValues:'ALL_NEW'
        }
        const cart = await dynamodb.send( new UpdateItemCommand(updateCart))
        return res.json({
            data:unmarshall(cart.Attributes!),
            ok:true
        })
    } catch (error) {
        return res.status(500).json({
            msg:error,
            ok:false
        })
    }
}
export const generateOrder = async(req:Request,res:Response) => {
    try {
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        const user = await cognito.send(new GetUserCommand(userParams));
        const cartParams: GetItemCommandInput = {
            TableName:'Carro_Compra',
            Key:{
                "username":{
                    S:user.Username!
                }
            },
            ProjectionExpression:'Productos'  
        };
        const cart = await dynamodb.send(new GetItemCommand(cartParams));
        if(!cart.Item){
            return res.status(404).json({
                msg:'No hay productos en el carrito',
                ok:false
            })
        }
        console.log(cart.Item);
        //TODO recover shopping cart from mysql
        const data:ProductCart[] = [];
    
        const {filename} = await transformHTMLToPDF(data,user.Username!);
        return res.download(filename,(err) => {
            res.end()
        })
    } catch (error) {
        return res.status(500).json({
            msg:error,
            ok:false
        })
    }
    
}

export const generateBill = async(req:Request,res:Response) => {
        // const token = req.headers.authorization?.split(' ')[1] as string;
        // const userParams: GetUserCommandInput = {
        //     AccessToken: token
        // };
        // const user = await cognito.send(new GetUserCommand(userParams));
}