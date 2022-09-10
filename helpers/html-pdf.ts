import fs from 'fs';
import { Buy, Cart, ProductCart } from '../models/Marketplace';
import path from 'path';

import pdfCreator from 'pdf-creator-node';
import { AttributeType, UserType } from '@aws-sdk/client-cognito-identity-provider';


const pdfOptions = {
    width: '8in',
    formate:'Letter',
    orientation: 'portrait',
    border: '3mm',
}

export const transformHTMLToPDF = (data:Buy[],filename:string,attrs:AttributeType[]):Promise<{filename:string}> => {
    return new Promise((resolve,reject) => {
        const html = fs.readFileSync(path.join(__dirname,'../assets/order.html'),{encoding:'utf-8'})
        const file = filename + '_doc' + '.pdf';
        const bitmap = fs.readFileSync(path.join(__dirname, "../assets/LogoNegro.png"));
        const logo = bitmap.toString('base64');
        const subtotal = data.reduce((total,producto) => {
            total += producto.SUBTOTAL
            return total
        },0)
        const total = data.map((att) => att.TOTAL)[0]
        const obj = {
            prodlist: data,
            total,
            subtotal
        };
        const details = {
            purchaseID:data.map((att) => att.COMPRA)[0],
            customerId:attrs.find((attr) => attr.Name == 'sub')?.Value,
            date:new Date(data.map((att) => att.FECHA)[0]).toLocaleDateString()
        };
        const document = {
            html: html,
            data: {
                logo:logo,
                ProductCarts: obj,
                details,
                user:{
                    name:attrs.find(({Name}) => Name?.includes('name'))?.Value,
                    rut:attrs.find(({Name}) => Name?.includes('rut'))?.Value,
                    enterpriseName:attrs.find(({Name}) => Name?.includes('enterpriseName'))?.Value,
                    adress:attrs.find(({Name}) => Name == 'address')?.Value,
                    email:attrs.find(({Name}) => Name?.includes('email'))?.Value,
                }
            },
            path:`./docs/${file}`,
        }
        pdfCreator.create(document,pdfOptions)
            .then((res:{filename:string}) => {
                resolve(res)
            })
            .catch((err:any) => {
                reject(err)
            })
    })
}