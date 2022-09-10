
import { Request, Response } from "express";
import { GetUserCommand } from "@aws-sdk/client-cognito-identity-provider";
import { BatchWriteItemCommand, BatchWriteItemCommandInput, BatchWriteItemInput } from "@aws-sdk/client-dynamodb";
import { PutCommand,PutCommandInput,BatchExecuteStatementCommand,BatchExecuteStatementCommandInput, UpdateCommandInput} from '@aws-sdk/lib-dynamodb';
import { marshall } from "@aws-sdk/util-dynamodb";
import * as _ from 'lodash';
import { gzipSync } from 'zlib';
import { mySQL } from '../database/db'
import aws from "../AWS";
import { files, utils } from "../helpers";
import { RowDataPacketStatus, catalogos_farmacia, catalogos_list } from "../models/Requests";
import { Medicamento } from "../models/Marketplace";
import Server from '../server/server'

const db = aws.DynamoDB;
const dbClient = aws.DocumentClient;
const cognito = aws.Cognito;

export const uploadList = async (req: any, res: Response) => {
  try {
    const { Drogueria, Pagina, Valido_desde, Valido_hasta } = req.body;
    const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
    const user = await cognito.send(new GetUserCommand({ AccessToken: token }));
    const { Value: enterpriseName } = user.UserAttributes?.find(({ Name }) => Name?.includes('enterpriseName'))!
    let progress: number = 0;
    let batchRequest:any[] = []
    req.files.forEach(async(elem: Express.Multer.File, i: number) => {
      const catalogoJson = files.transformExcelToJson(
        elem.buffer,
        Pagina,
        (err: string) => {
          if (err) throw Error(err);
        }
        );

      const Item: any = {
        "Nombre": enterpriseName,
        "Catalogo-Nombre": Drogueria,
        "Productos": catalogoJson,
        "Valido-desde": Valido_desde,
        "Valido-hasta": Valido_hasta
      }
      const PutRequest = {
        Item: marshall(Item)
      }
      batchRequest.push({ PutRequest })
    });

    const params: BatchWriteItemCommandInput = {
      RequestItems: {
        Farmacias: batchRequest
      }
    }
    const increment = setInterval(()=> {
      if(progress < 80){
        progress++
        Server.socket.emit('upload', progress)
      }else{
        clearInterval(increment);
      }
    },500)
    await db.send(new BatchWriteItemCommand(params));

    progress = 100;
    Server.socket.emit('upload', progress)
    return res.json({
      ok: true,
    });

  } catch (error: any) {
    Server.socket.emit('upload', -1)
    return res.status(500).json({
      msg: error?.message,
      ok: false,
    });
  }
};

export const getLists = async (req: Request, res: Response) => {
  try {
    const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
    const user = await cognito.send(new GetUserCommand({ AccessToken: token }))
    const rut = user.UserAttributes?.find(({ Name }) => Name?.includes('rut'))?.Value as string
    const result: catalogos_farmacia[] = await new Promise((resolve, reject) => mySQL.db.query('CALL catalogos_farmacia(?);', rut, ((err, data: [any, RowDataPacketStatus]) => {
      if (err || !data) reject(err ?? 'Sin catalogos');
      resolve(data[0])
    }))
    )
    //Transformar resultado
    const droguerias = result.map(({ VALIDO_DESDE, VALIDO_HASTA, ...data }) => {
      return {
        ...data,
        VALIDEZ: [VALIDO_DESDE, VALIDO_HASTA]
      }
    }).reduce((droguerias: any[], catalogo) => {
      const c = droguerias.find((d) => d.NOMBRE == catalogo.NOMBRE);
      if (c) {
        c.FECHA_CARGA = (catalogo.FECHA_CARGA > c.FECHA_CARGA) ? catalogo.FECHA_CARGA : c.FECHA_CARGA;
        c.VALIDEZ = [...c.VALIDEZ, catalogo.VALIDEZ];
      } else {
        droguerias.push({
          NOMBRE: catalogo.NOMBRE,
          FECHA_CARGA: catalogo.FECHA_CARGA,
          VALIDEZ: [catalogo.VALIDEZ]
        });
      }
      return droguerias
    }, []).map((catalogo) => {
      return {
        NOMBRE: catalogo.NOMBRE,
        FECHA_CARGA: catalogo.FECHA_CARGA,
        VALIDEZ: { ...utils.getValidezArray(catalogo.VALIDEZ) }
      }
    })

    return res.json({
      data: {
        CATALOGOS: droguerias
      },
    });
  } catch (error: any) {
    return res.status(500).json({
      msg: error?.message,
      ok: false,
    });
  }
};

export const getStats = async (req: Request, res: Response) => {
  try {
    const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
    const user = await cognito.send(new GetUserCommand({ AccessToken: token }))
    const rut = user.UserAttributes?.find(({ Name }) => Name?.includes('rut'))?.Value as string
    mySQL.db.query('CALL STATS(?);SELECT * FROM POPULAR_Droguerias;SELECT * FROM POPULAR_PRODUCTOS;', rut, (err, result) => {
      if (err) throw err;
      const [[stats] ,popularMedicamentos, ,drogueria,canasta] = result;
      const medicamentos = (popularMedicamentos as Medicamento[]).map((medicamento) => {
        return {
          nombre: medicamento.NOMBRE,
          condicionDeVenta: medicamento.VENTA,
          cantidad: medicamento.CANTIDAD,
          ultimaCompra: new Date(medicamento.ULTIMA).toLocaleDateString()
        }
      })
      return res.json({
        data: { ...stats, MEDICAMENTOS: medicamentos, TOP_DROGUERIAS: drogueria,CANASTA:canasta },
        ok: true
      })
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false
    })
  }
}
