import fs from 'fs';
import util from 'util';
import { Request, Response } from "express";
import mysql from 'mysql';
import { GetItemCommand, GetItemCommandInput, GetItemCommandOutput, UpdateItemCommand, UpdateItemCommandInput } from "@aws-sdk/client-dynamodb";
import { GetUserCommand, GetUserCommandInput } from "@aws-sdk/client-cognito-identity-provider";
import * as SESClient from '@aws-sdk/client-ses';
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import nodemailer from 'nodemailer';
import AdmZip from 'adm-zip';

import aws from "../AWS";
import { mySQL } from '../database/db'
import { Buy, Order, Product, ProductCart, Compra, orden_farmacia } from "../models";
import { transformHTMLToPDF } from "../helpers/html-pdf";

const db = mySQL;
const cognito = aws.Cognito;
const dynamodb = aws.DynamoDB;

export const getProducts = async (req: Request, res: Response) => {
    try {
        const page = req.query.page || '1';
        const { q, field } = req.query;
        let where = undefined;
        if (q && field) {
            where = { [field as string]: q } as { [field: string]: string }
        }
        let order = undefined;
        if (req.query.order && req.query.sort) {
            order = {
                [req.query.order as string]: req.query.sort as 'ASC' | 'DESC'
            };
        }
        const productsPerPage: number = 30;
        const from = (Number(page) == 1) ? 0 : (Number(page) - 1) * productsPerPage + 1
        const [query, count] = await db.selectAll('MARKET_Producto', from, productsPerPage, where, order)
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
export const getSuggestedProducts = async (req: Request, res: Response) => {
    try {
        const result = await new Promise((resolve,reject) => {
            db.db.query('SELECT * FROM POPULAR_PRODUCTOS;',(err,data) => {
                if(err || !data) reject(err ?? 'No hay productos para mostrar');
                resolve(data)
            })
        }) 
        console.log(result)
        return res.json({
            data: result,
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
        const results = await new Promise<any>((resolve, reject) => {

            db.db.query(`CALL detalle_producto(?)`, id, (err, data, fields) => {
                if (err) {
                    return reject(err);
                }
                if (Array.isArray(data[0])) {
                    return resolve(data[0]);
                } else {
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
            data: results,
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
        const results = await new Promise<any>((resolve, reject) => {
            const query = mysql.raw("'" + name + "%'");
            db.db.query(`SELECT * FROM Catalogo_Producto WHERE DESCRIPCION LIKE ?;`, query, (err, data, fields) => {
                if (err) {
                    return reject(err);
                }
                return resolve(data)
            })
        })
        return res.json({
            data: results,
            ok: true
        })
    } catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        })
    }
}
export const addToCart = async (req: Request<{}, {}, Product>, res: Response) => {
    try {
        const producto = req.body;
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        const user = await cognito.send(new GetUserCommand(userParams));
        const cartParams: GetItemCommandInput = {
            TableName: 'Carro_Compra',
            Key: {
                'Username': {
                    S: user.Username!
                }
            },
            ProjectionExpression: 'Productos'
        }
        //Obtener articulos del carrito
        let cart: GetItemCommandOutput = await dynamodb.send(new GetItemCommand(cartParams));
        let Productos: Product[];
        if (!cart.Item || Object.entries(cart.Item!).length < 1) {
            Productos = [];
        } else {
            Productos = unmarshall(cart.Item!).Productos as Product[]
        }
        if (Productos?.length > 0) {
            const exists = Productos.find((p) => p.PRODUCTO_ID === producto.PRODUCTO_ID && p.DESCRIPCION === producto.DESCRIPCION)
            if (exists) {
                exists.CANTIDAD = (exists.CANTIDAD || 0) + 1
            } else {
                Productos
                producto.CANTIDAD = 1;
                Productos.push(producto)
            }
        } else {
            producto.CANTIDAD = 1;
            Productos.push(producto)
        }
        const newProductos = marshall(Productos)
        let updateCart: UpdateItemCommandInput = {
            TableName: 'Carro_Compra',
            Key: {
                "Username": {
                    S: user.Username!
                }
            },
            UpdateExpression: "SET Productos = :p",
            ExpressionAttributeValues: {
                ":p": {
                    L: newProductos as unknown as []
                },
            },
            ReturnValues: 'ALL_NEW'
        }
        const newCart = await dynamodb.send(new UpdateItemCommand(updateCart))
        return res.json({
            msg: 'Producto añadido',
            data: unmarshall(newCart.Attributes!),
            ok: true
        })
    } catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
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
        const cartParams: GetItemCommandInput = {
            TableName: 'Carro_Compra',
            Key: {
                'Username': {
                    S: user.Username!
                }
            },
            ProjectionExpression: 'Productos'
        }
        const cart = await dynamodb.send(new GetItemCommand(cartParams));

        return res.json({
            data: unmarshall(cart.Item!).Productos ?? [],
            ok: true
        })
    } catch (error) {
        return res.json({
            msg: error,
            ok: false
        })
    }
}
export const removeFromCart = async (req: Request<{}, {}, { producto: ProductCart }>, res: Response) => {
    try {
        const i = req.query.index as string
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        const user = await cognito.send(new GetUserCommand(userParams));
        const updateCart: UpdateItemCommandInput = {
            TableName: 'Carro_Compra',
            Key: {
                "Username": {
                    S: user.Username!
                }
            },
            UpdateExpression: `REMOVE Productos[${i}]`,
            ConditionExpression: 'attribute_exists(Productos)',
            ReturnValues: 'ALL_NEW'
        }

        const result = await dynamodb.send(new UpdateItemCommand(updateCart))
        return res.json({
            msg: 'Producto removido',
            data: unmarshall(result.Attributes!),
            ok: true
        })
    } catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        })
    }
}
export const updateCart = async (req: Request, res: Response) => {
    try {
        const productos = marshall(req.body);
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        const user = await cognito.send(new GetUserCommand(userParams));
        let updateCart: UpdateItemCommandInput = {
            TableName: 'Carro_Compra',
            Key: {
                "Username": {
                    S: user.Username!
                }
            },
            UpdateExpression: "SET Productos = :p",
            ExpressionAttributeValues: {
                ":p": {
                    L: productos as unknown as []
                },
            },
            ReturnValues: 'ALL_NEW'
        }
        const cart = await dynamodb.send(new UpdateItemCommand(updateCart))
        return res.json({
            data: unmarshall(cart.Attributes!),
            ok: true
        })
    } catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        })
    }
}
export const generateOrder = async (req: Request, res: Response) => {
    try {
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        let user = await cognito.send(new GetUserCommand(userParams));
        const cartParams: GetItemCommandInput = {
            TableName: 'Carro_Compra',
            Key: {
                "Username": {
                    S: user.Username!
                }
            },
            ProjectionExpression: 'Productos'
        };
        const cart = await dynamodb.send(new GetItemCommand(cartParams));
        if (!cart.Item || unmarshall(cart.Item).length < 1) {
            return res.status(404).json({
                msg: 'No hay productos en el carrito',
                ok: false
            })
        }
        const rut = user.UserAttributes?.find(({ Name }) => Name?.includes('rut'))?.Value || '';
        const query = util.promisify(db.db.query).bind(db.db);
        const result = await (async () => {
            try {
                //Obtener ID
                const result = await query(`SELECT ID FROM Farmacias WHERE RUT = '${rut}'`) as [{ ID: number }] | [];
                const order = unmarshall(cart.Item!) as Order;
                //Calcular total de la compra
                let grandTotal: number = order.Productos.reduce((total: number, p: Product) => {
                    total += p.CANTIDAD * ((p.PRECIO_OFERTA > 0 && p.PRECIO_OFERTA < p.PRECIO) ? p.PRECIO_OFERTA : p.PRECIO)

                    return total;
                }, 0)
                //Insertar nueva compra
                let [, Query] = await query(`INSERT INTO Compra(TOTAL) VALUES (${grandTotal.toFixed(2)});SELECT LAST_INSERT_ID() AS COMPRA_ID FROM Compra;`) as [any, [{ COMPRA_ID: Number }]]
                const compraID = Query[0].COMPRA_ID;
                const droguerias = order.Productos.reduce((droguerias: { [NOMBRE: string]: Product[] }, p) => {
                    droguerias[p.NOMBRE] = droguerias[p.NOMBRE] || [];
                    droguerias[p.NOMBRE].push(p)
                    return droguerias;
                }, {})
                //Generar ordenes de compra
                await Promise.all(Object.entries(droguerias).map(async ([d, p]) => {
                    const totalOrder = p.reduce((total: number, p: Product) => {
                        total += p.CANTIDAD * ((p.PRECIO_OFERTA > 0 && p.PRECIO_OFERTA < p.PRECIO) ? p.PRECIO_OFERTA : p.PRECIO);
                        return total;
                    }, 0)
                    let [, Query] = await query(`INSERT INTO Ordenes(NOMBRE,FARMACIA_ID,GRANDTOTAL,ID_COMPRA) VALUES('${d}','${result[0]?.ID}',${totalOrder.toFixed(2)},${compraID});SELECT LAST_INSERT_ID() AS ORDEN_ID FROM Ordenes;`) as [any, [{ ORDEN_ID: number }]]
                    const orderID: number = Query[0].ORDEN_ID;
                    p.map(async (p: Product) => {
                        const subtotal = p.CANTIDAD * ((p.PRECIO_OFERTA > 0 && p.PRECIO_OFERTA < p.PRECIO) ? p.PRECIO_OFERTA : p.PRECIO)
                        await query(`INSERT INTO Orden_Producto(ORDER_ID,PRODUCTO_ID,CANTIDAD,PRECIO,TOTAL) VALUES(${orderID},'${p.PRODUCTO_ID}',${p.CANTIDAD},${(p.PRECIO_OFERTA > 0 && p.PRECIO_OFERTA < p.PRECIO) ? p.PRECIO_OFERTA : p.PRECIO},${subtotal})`);
                    });
                }))
                return await query(`SELECT * FROM orden_compra WHERE COMPRA = ${compraID};`);
            }
            catch (error) {
                console.log(error)
                return []
            }
        })() as Buy[];
        if (result.length < 1) return res.status(404).json({ msg: 'Usuario no encontrado', ok: false })
        const bills = result.reduce((droguerias: { [ORDEN: number]: Buy[] }, p) => {
            droguerias[p.ORDEN] = droguerias[p.ORDEN] || [];
            droguerias[p.ORDEN].push(p)
            return droguerias;
        }, {});
        const zip = new AdmZip();
        let files: string[] = [];
        for (let bill in bills) {
            const { filename } = await transformHTMLToPDF(bills[bill], bills[bill][0].DROGUERIA + user.Username!, user.UserAttributes!);
            files.push(filename)
            zip.addLocalFile(filename);
        }
        const zipFileContents = zip.toBuffer();
        res.writeHead(200, {
            'Content-Disposition': `attachment; filename="orders.zip"`,
            'Content-Type': 'application/zip',
        })
        return res.end(zipFileContents, () => {
            dynamodb.send(new UpdateItemCommand({
                TableName: 'Carro_Compra',
                Key: {
                    "Username": {
                        S: user.Username!
                    }
                },
                UpdateExpression: 'REMOVE Productos '
            }))
            files.forEach((path) => {
                fs.unlink(path, (err) => {
                    if (err) console.error(err);
                });
            })
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: error,
            ok: false
        })
    }

}
export const getOrders = async (req: Request, res: Response) => {
    try {
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        const user = await cognito.send(new GetUserCommand(userParams));
        const results: [number, orden_farmacia[]] | [] = await new Promise((resolve, reject) => {
            const rut = user.UserAttributes?.find((att) => att.Name?.includes('rut'))?.Value as string;
            db.db.query('SELECT ID FROM Farmacias WHERE RUT = ?;', rut, (err, data) => {
                if (!data || data.length < 1) return res.status(404).json({ msg: 'Usuario no encontrado, contacte con el administrador', ok: false })
                const ID = (data as [{ ID?: number }])[0]?.ID;
                const page = req.query.page || '1';
                //Criterios de busqueda
                let order: { [target: string]: string } | undefined = undefined;
                let date: [string, string] | undefined = undefined;
                let name: string | undefined = undefined;
                let estado: string | undefined = undefined;

                if (req.query.order && req.query.sort) {
                    order = {
                        [req.query.order as string]: req.query.sort as 'ASC' | 'DESC'
                    };
                }
                if (req.query.start && req.query.end) {
                    const start = new Date(req.query.start as string).toISOString();
                    const end = new Date(req.query.end + ' 23:59:59').toISOString();
                    date = [start, end];
                }
                if (req.query.name) {
                    name = req.query.name as string;
                }
                if (req.query.state) {
                    estado = req.query.state as string;
                }

                const range = (date) ? `AND FECHA BETWEEN CAST('${date[0]}' AS DATETIME) AND CAST('${date[1]}' AS DATETIME)` : '';
                const orderby = (order) ? `ORDER BY ${Object.keys(order)} ${Object.values(order)}` : '';
                const where = (): string => {
                    if (name || estado) {
                        let where = '';
                        if (name) {
                            where += `AND DROGUERIA LIKE '${name}%'`;
                        }
                        if (estado) {
                            where += `AND ESTADO = '${estado}'`;
                        }
                        return where;
                    } else {
                        return '';
                    }
                }
                //Rango de busqueda
                const itemsPerPage: number = 30;
                const from = (Number(page) == 1) ? 0 : (Number(page) - 1) * itemsPerPage + 1;

                db.db.query(`SELECT COUNT(*) AS TOTAL FROM orden_compra WHERE ID = ? ${where()} ${range} GROUP BY ORDEN ${orderby};SELECT * FROM orden_compra WHERE ID = ? ${where()} ${range}GROUP BY ORDEN  ${orderby}  LIMIT ?,?;`, [ID, ID, from, itemsPerPage], (err, data) => {
                    if (err || !data) return reject(err ?? 'Ningun dato encontrado');
                    if(data[0].length < 1 || data[1] < 1) return res.json({data:[],ok:true});
                    const [{ TOTAL }] = data[0];
                    resolve([TOTAL, data[1]])
                })
            })
        })
        return res.json({
            count: results?.[0],
            data: results?.[1],
            ok: true
        })
    } catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        })
    }


}
export const getOrderById = async (req: Request, res: Response) => {
    try {
        const ordenID = req.params['id'];
        const email = JSON.parse(req.query.email as string) as boolean
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        const user = await cognito.send(new GetUserCommand(userParams));
        const results: Buy[] = await new Promise((resolve, reject) => {
            const rut = user.UserAttributes?.find((att) => att.Name?.includes('rut'))?.Value as string;
            db.db.query('SELECT ID FROM Farmacias WHERE RUT = ?;', rut, (err, data) => {
                if (!data || data.length < 1) return res.status(404).json({ msg: 'Usuario no encontrado, contacte con el administrador', ok: false })
                const [{ ID }] = data as [{ ID: number }];
                db.db.query(`SELECT * FROM orden_compra WHERE ORDEN = ? AND ID = ?;`, [ordenID, ID], (err, data) => {
                    if (err) reject(err);
                    resolve(data)
                })
            })
        })
        const { filename } = await transformHTMLToPDF(results, user.Username!, user.UserAttributes!)
        if (email) {
            const userEmail = user.UserAttributes?.find(({ Name }) => Name == 'email')?.Value
            const ses = aws.SES;
            const transporter = nodemailer.createTransport({
                SES: { ses, aws: SESClient },
            });
            const attachment = {
                filename: 'order.pdf',
                path: filename
            }
            transporter.sendMail({
                from: 'no-reply@cleppi.cl',
                to: userEmail,
                subject: `Tu órden generada en Cleppi.cl`,
                attachments: [attachment]
            }, (err, _) => {
                if (err) throw err;
            })
            return res.json({
                msg: 'Orden enviada por correo electronico',
                ok: true
            })
        }

        return res.download(filename, (err) => {
            if (err) throw err;
            fs.unlink(filename, (err) => {
                if (err) throw err;
            })
        })
    } catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        })
    }


}
export const getBuys = async (req: Request, res: Response) => {
    try {
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        const user = await cognito.send(new GetUserCommand(userParams));
        const results: [number, Buy[]] = await new Promise((resolve, reject) => {
            const rut = user.UserAttributes?.find((att) => att.Name?.includes('rut'))?.Value as string;
            db.db.query('SELECT ID FROM Farmacias WHERE RUT = ?;', rut, (err, data) => {
                if (!data || data.length < 1) return res.status(404).json({ msg: 'Usuario no encontrado, contacte con el administrador', ok: false })
                const [{ ID }] = data as [{ ID: number }];
                const page = req.query.page || '1';
                let order: { [target: string]: string } | undefined = undefined;
                if (req.query.order && req.query.sort) {
                    order = {
                        [req.query.order as string]: req.query.sort as 'ASC' | 'DESC'
                    };
                }
                let date: [string, string] | undefined = undefined;
                if (req.query.start && req.query.end) {
                    const start = new Date(req.query.start as string).toISOString();
                    const end = new Date(req.query.end as string).toISOString()
                    date = [start, end];
                }
                let name: string | undefined = undefined;
                if (req.query.name) {
                    name = req.query.name as string;
                }
                const range = (date) ? `AND FECHA BETWEEN CAST('${date[0]}' AS DATETIME) AND CAST('${date[1]}' AS DATETIME)` : '';
                const orderby = (order) ? `ORDER BY ${Object.keys(order)} ${Object.values(order)}` : '';
                const where = (name) ? `AND DROGUERIA LIKE '${name}%'` : '';
                const itemsPerPage: number = 30;
                const from = (Number(page) == 1) ? 0 : (Number(page) - 1) * itemsPerPage + 1;
                db.db.query(`SELECT COUNT(*) AS TOTAL FROM orden_compra WHERE ID = ? ${where} ${range} ${orderby};SELECT * FROM orden_compra WHERE ID = ? ${where} ${range} ${orderby} LIMIT ?,?;`, [ID, ID, from, itemsPerPage], (err, data) => {
                    if (err) reject(err);
                    const [{ TOTAL }] = data[0];
                    resolve([TOTAL, data[1]])
                })
            })
        })
        const groupedResult = results[1].reduce((compra: Compra[], { COMPRA, DROGUERIA, FECHA, TOTAL, ESTADO }, i) => {
            if (compra.some((compra) => compra.ID_COMPRA == COMPRA)) {
                const newCompra = compra.find((compra) => compra.ID_COMPRA == COMPRA)!;
                newCompra.ORDENES = newCompra.ORDENES ?? []
                newCompra.ORDENES.push(DROGUERIA)
                newCompra.ORDENES = [...new Set(newCompra.ORDENES)]
                newCompra.ESTADO = newCompra.ESTADO ?? []
                newCompra.ESTADO.push(ESTADO)
                newCompra.ESTADO = [...new Set(newCompra.ESTADO)]
            } else {
                compra.push({ ID_COMPRA: COMPRA, ESTADO: [ESTADO], FECHA_CRECION: FECHA, ORDENES: [DROGUERIA], TOTAL: TOTAL })
            }
            return compra
        }
            , [])
        return res.json({
            count: results[0],
            data: groupedResult,
            ok: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: error,
            ok: false
        })
    }


}
export const getBuyById = async (req: Request, res: Response) => {
    try {
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        const { id } = req.params;
        const user = await cognito.send(new GetUserCommand(userParams));
        const results: Buy[] = await new Promise((resolve, reject) => {
            const rut = user.UserAttributes?.find((att) => att.Name?.includes('rut'))?.Value as string;
            db.db.query('SELECT ID FROM Farmacias WHERE RUT = ?;', rut, (err, data) => {
                if (!data || data.length < 1) return res.status(404).json({ msg: 'Usuario no encontrado, contacte con el administrador', ok: false })
                const [{ ID }] = data as [{ ID: number }];

                db.db.query(`SELECT DROGUERIA,RUT,DIRECCION,COMPRA,ORDEN AS ID,FECHA,ESTADO,TOTAL FROM orden_compra WHERE ID = ? AND COMPRA = ?;`, [ID, id], (err, data) => {
                    if (err || !data) reject(err ?? `Ninguna compra con el id ${id}`);
                    resolve(data)
                })
            })
        })

        let total = 0;
        let estado = -1;
        const result = results.reduce((drogueria: Buy[], data) => {
            const finded = drogueria.find((drogueria) => drogueria.DROGUERIA == data.DROGUERIA)
            if (finded) {
                estado = (finded.ESTADO != data.ESTADO || finded.ESTADO < data.ESTADO) ? data.ESTADO : finded.ESTADO;
            } else {
                estado = data.ESTADO;
                drogueria.push(data);
            }
            return drogueria;
        }, [])
        result.forEach((compra) => total += compra.TOTAL)
        return res.json({
            id: results[0].COMPRA,
            data: result,
            total,
            estado,
            ok: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: error,
            ok: false
        })
    }
}
export const confirmBuy = async (req: Request, res: Response) => {
    try {
        const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
        const userParams: GetUserCommandInput = {
            AccessToken: token
        };
        const { id } = req.params;
        const user = await cognito.send(new GetUserCommand(userParams));
        const results: any= await new Promise((resolve, reject) => {
            const rut = user.UserAttributes?.find((att) => att.Name?.includes('rut'))?.Value as string;
            db.db.query('SELECT ID FROM Farmacias WHERE RUT = ?;', rut, (err, data) => {
                if (!data || data.length < 1) return res.status(404).json({ msg: 'Usuario no encontrado, contacte con el administrador', ok: false })
                const [{ ID }] = data as [{ ID: number }];

                db.db.query(`UPDATE Ordenes SET ESTADO = 2 WHERE FARMACIA_ID = ? AND ID_COMPRA = ?;`, [ID, id], (err, data) => {
                    if (err || !data) reject(err ?? `Ninguna compra con el id ${id}`);
                    resolve(data)
                })
            })
        })
        return res.json({
            data:results,
            ok: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: error,
            ok: false
        })
    }
 }