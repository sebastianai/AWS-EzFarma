
import {  Request,Response } from "express";
import { GetUserCommand } from "@aws-sdk/client-cognito-identity-provider";
import { BatchWriteItemCommand, BatchWriteItemCommandInput, QueryCommand, QueryCommandInput} from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { mySQL } from '../database/db'
import aws from "../AWS";
import { files } from "../helpers";

const db = aws.DynamoDB;
const cognito = aws.Cognito;

export const uploadList = async (req: any, res: Response) => {
  try {
  const { Drogueria,Pagina, Valido_desde,Valido_hasta} = req.body;
  const token = Object.entries(req.cookies).find(([value]) => value.includes('accessToken'))?.[1] as string
  const user = await cognito.send( new GetUserCommand({AccessToken:token}));
  const {Value:enterpriseName} = user.UserAttributes?.find(({Name}) => Name?.includes('enterpriseName'))!
  let batchRequest:any[] = [];
  req.files.forEach((elem: Express.Multer.File, i: number) => {
    const catalogoJson = files.transformExcelToJson(
      elem,
      Pagina,
      (err: string) => {
        if (err) throw Error(err);
      }
    );
    const Item:any = {
      "Nombre":enterpriseName,
      "Catalogo-Nombre":Drogueria,
      "Productos":catalogoJson,
      "Valido-desde":Valido_desde,
      "Valido-hasta":Valido_hasta
    }
    const PutRequest = {
      Item:marshall(Item)
    }
    batchRequest.push({PutRequest})
  });

  const params:BatchWriteItemCommandInput = {
    RequestItems:{
      Farmacias:batchRequest
    }
  }
  const result = await db.send(new BatchWriteItemCommand(params));
  
  
  return res.json({
    data: result,
    ok: true,
  });

  } catch (error: any) {
    return res.status(500).json({
      msg: error?.message,
      ok: false,
    });
  }
};

export const getLists = async (req: Request, res: Response) => {
  try {
    const token = req.cookies['token'] as string
    const user = await cognito.send(new GetUserCommand({AccessToken:token}))
    const Nombre = user.UserAttributes?.find(({Name}) => Name?.includes('enterpriseName'))?.Value as string
    const params:QueryCommandInput = {
      TableName:'Farmacias',
      KeyConditionExpression: 'Nombre = :n',
      ExpressionAttributeValues:{
        ":n":{
          S:Nombre
        }
      }
    };

    const results = await db.send(new QueryCommand(params));
    return res.json({
      data: results.Items,
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
    const user = await cognito.send(new GetUserCommand({AccessToken:token}))
    const rut = user.UserAttributes?.find(({Name}) => Name?.includes('RUT'))?.Value as string
    mySQL.db.query('CALL STATS(?);SELECT * FROM POPULAR_Droguerias;',rut,(err,result) => {
      if(err) throw err;
      const [[stats],,drogueria] = result
      return res.json({
        data:{...stats,TOP_DROGUERIAS:drogueria},
        ok:true
      })
    })
  } catch (error) {
    return res.status(500).json({
      ok:false
    })
  }
}
