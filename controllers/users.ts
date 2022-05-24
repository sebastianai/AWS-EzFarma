import { Request, Response } from "express";
import {
  AdminCreateUserCommand,
  AdminCreateUserCommandInput,
} from "@aws-sdk/client-cognito-identity-provider";
import { GetCommand, GetCommandInput } from "@aws-sdk/lib-dynamodb";
import { decode, JwtPayload } from "jsonwebtoken";
import { User } from "models/User";

import db, { document } from "../database/db";
import aws from "../AWS";

import { bcrypt } from "../helpers";
import { comparePassword } from "../helpers/bcrypt";
import { createJWT, checkExpJWT } from "../helpers/jwt";

const cognito = aws.Cognito;

export const createUser = async (
  req: Request<{ pool: string }, {}, User>,
  res: Response
) => {
  let { email, Role } = req.body;
  const pool = req.params.pool || "us-east-1_BUezKKPSG";
  const params: AdminCreateUserCommandInput = {
    Username: email,
    UserPoolId: pool,
    DesiredDeliveryMediums: ["EMAIL"],
    TemporaryPassword: "Abc@321",
    
    UserAttributes: [
      {
        Name: "custom:enterpriseName",
        Value: Role.enterpriseName,
      },
      {
        Name: "name",
        Value: Role.name,
      },
      {
        Name: "email",
        Value: email,
      },
    ],
  };
  try {
    const data = await cognito.send(new AdminCreateUserCommand(params));
    return res.json({
      msg: "Operacion exitosa",
      data,
      ok: true,
    });
  } catch (error) {
    console.error("Error", error);
    return res.status(500).json({
      msg: error,
      ok: false,
    });
  }
};

export const login = async (req: Request<{}, {}, User>, res: Response) => {
  let { email, password } = req.body;

  const query: GetCommandInput = {
    TableName: "Users",
    Key: {
      email: email,
    },
  };

  const result = (await (
    await document.send(new GetCommand(query))
  ).Item) as User;

  if (!result?.password || !result?.email) {
    return res.status(502).json({
      msg: "Usuario invalido",
      ok: false,
    });
  }
  if (!comparePassword(password!, result.password)) {
    return res.status(400).json({
      msg: "Usuario o contraseñas inválidas",
      ok: false,
    });
  }

  const token = await createJWT(result.email, result.Role.enterpriseName);
  let { password: drop, ...user } = result;
  return res.cookie("token", token, { httpOnly: true, secure: true }).json({
    data: user,
    token,
    ok: true,
  });
};

export const logout = (req: Request, res: Response) => {
  return res.clearCookie("token").end();
};

export const renewToken = async (req: Request, res: Response) => {
  const token = req.cookies["token"] as string;
  if (!checkExpJWT(token)) {
    const { payload } = decode(token) as JwtPayload;
    const newToken = await createJWT(payload[0]);
    return res
      .cookie("token", newToken, { httpOnly: true, secure: true })
      .json({
        token: newToken,
        ok: true,
      });
  }
  return res.json({
    token,
    ok: true,
  });
};

export const getUser = async (req: Request, res: Response) => {
  const token = req.cookies["token"] || (req.headers["token"] as string);
  if (checkExpJWT(token)) {
    const { payload } = decode(token) as JwtPayload;
    const [email] = payload as [string, string];
    const params: GetCommandInput = {
      TableName: "Users",
      Key: { email: email },
    };
    const result = await document.send(new GetCommand(params));
    if (!result) {
      return res.status(400).json({
        msg: `No se encontro un usuario con el correo`,
        ok: false,
      });
    }
    const { password, ...user } = result.Item as User;
    return res.json({
      data: user,
      ok: true,
    });
  }
};
