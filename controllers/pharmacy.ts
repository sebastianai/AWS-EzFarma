import {
  BatchGetItemCommand,
  BatchGetItemCommandInput,
  BatchWriteItemCommand,
  BatchWriteItemCommandInput,
  QueryCommand,
} from "@aws-sdk/client-dynamodb";
import {  Request,Response } from "express";
import { decode, JwtPayload } from "jsonwebtoken";
import aws from "../AWS";
import { files } from "../helpers";
import { transformArrToBatch } from "../helpers/aws";
import { GetCommand, GetCommandInput, QueryCommandInput } from '@aws-sdk/lib-dynamodb';
import { GetCustomParams } from "models/Requests";

const db = aws.DynamoDB;
const document = aws.DocumentClient;

export const uploadList = async (req: any, res: Response) => {
  try {
  const queryParams = Object.entries(req.query) as [string, any];
  const Catalogos: string[] = queryParams.filter(([param]: string) => param.includes("Catalogo"))
                                          .map((elem) => elem[1]);
  const Droguerias: string[] = queryParams.filter(([param]: string) => param.includes("Drogueria"))
                                          .map((elem) => elem[1]);

  const { payload } = decode(req.headers.token) as JwtPayload;
  const [, enterpriseName] = payload;

  let batchRequest:any[] = [];
  req.files.forEach((elem: Express.Multer.File, i: number) => {
    const catalogoJson = files.transformExcelToJson(
      elem,
      Catalogos[i],
      (err: string) => {
        if (err) throw Error(err);
      }
    );
    const PutRequest = transformArrToBatch(catalogoJson, {
      Name: enterpriseName,
      KeySchema: "Descripcion",
      Drogstore: Droguerias[i],
    });
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
    const catalogo = req.params.catalogo
    const { payload } = decode(req.headers.token as string) as JwtPayload;
    const [email, enterpriseName] = payload;

    const params:BatchGetItemCommandInput = {
      RequestItems:{
        "Farmacias":{
          Keys:[
            {
              "Nombre":{S:enterpriseName},
              "Catalogo-Nombre":{S:catalogo}
            }
          ]
        }
      }
    };

    const results = await db.send(new BatchGetItemCommand(params));
    return res.json({
      data: results,
    });
  } catch (error: any) {
    return res.status(500).json({
      msg: error?.message,
      ok: false,
    });
  }
};

export const updateCart = async(req:any,res:Response) => {
  
}
