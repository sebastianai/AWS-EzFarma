import {Request,Response,NextFunction} from 'express';
import {validationResult} from 'express-validator';

import * as aws from './aws';
import * as files from './files';
import * as jwt from './jwt';
import * as utils from './utils';

const handlerErrorResult = (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors,
      });
    }
    next();
};

export{
    aws,
    files,
    jwt,
    utils,
    handlerErrorResult
}