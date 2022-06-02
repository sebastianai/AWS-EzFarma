import { Response,Request, Router } from 'express';
import { body, check, param, cookie } from 'express-validator';
import multer from "multer";

import { pharmacyController } from '../controllers';
import { handlerErrorResult, files,jwt,aws } from '../middlewares';

const storage = multer.memoryStorage();
const upload = multer({storage:storage,limits: { fieldSize: 10 * 1024 * 1024 } })

const router = Router();

router.get('',[
    cookie('token').custom(jwt.verifyToken),
    param("catalogo").notEmpty().bail().custom((value)=>  aws.validateObject("Farmacias","Nombre",{S:"Farmacia de prueba"},value)),
    handlerErrorResult
] ,pharmacyController.getLists)

router.post('/upload',
            [
            cookie('token'),
             upload.array('Catalogo'),
            check('Catalogo').custom((value,{req}) => files.validateExtension('xls','xlsx')(req)),
             handlerErrorResult
            ],
            pharmacyController.uploadList
)

export default router;