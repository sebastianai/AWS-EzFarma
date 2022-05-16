import { Response,Request, Router } from 'express';
import { body, check } from 'express-validator';
import multer from "multer";

import { pharmacyController } from '../controllers';
import { handlerErrorResult, files,jwt } from '../middlewares';

const storage = multer.memoryStorage();
const upload = multer({storage:storage,limits: { fieldSize: 10 * 1024 * 1024 } })

const router = Router();

router.get('',[
    check('token').custom(jwt.verifyToken),
    handlerErrorResult
] ,pharmacyController.getLists)

router.post('/upload/:id',
            [
             upload.array('Catalogo'),
            check('Catalogo').custom((value,{req}) => files.validateExtension('xls','xlsx')(req)),
             handlerErrorResult
            ],
            pharmacyController.uploadList
)

export default router;