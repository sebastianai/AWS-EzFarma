import fs from 'fs';
import { Cart, ProductCart } from '../models/Marketplace';
import path from 'path';

import pdfCreator from 'pdf-creator-node';


const pdfOptions = {
    width: '8in',
    formate:'Letter',
    orientation: 'portrait',
    border: '3mm',
}

export const transformHTMLToPDF = (data:ProductCart[],filename:string):Promise<{filename:string}> => {
    return new Promise((resolve,reject) => {
        const html = fs.readFileSync(path.join(__dirname,'../assets/order.html'),{encoding:'utf-8'})
        const file = filename + '_doc' + '.pdf';
        const bitmap = fs.readFileSync(path.join(__dirname, "../assets/LogoNegro.png"));
        const logo = bitmap.toString('base64');
        let array:Cart[] = [];
        let total = 0;
        data.forEach(d => {
            total = d.producto.PRECIO * d.cantidad;
            array.push({productos:d,total:total});
        });

        let subtotal = 0;
        array.forEach((i) => {
            subtotal += i.total
        });

        const obj = {
            prodlist: array,
            subtotal: subtotal
        }
        const document = {
            html: html,
            data: {
                logo:logo,
                ProductCarts: obj,
                details: {
                    purchaseID:'asasd',
                    customerID:'1',
                    date: new Date().toLocaleDateString()
                },
                user:{
                    rut:'77.777.777-k',
                    enterpriseName:'Farmacia de prueba',
                    name:'Usuario'
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