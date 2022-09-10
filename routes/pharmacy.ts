import { Response,Request, Router } from 'express';
import { body, check, param, cookie, query } from 'express-validator';
import multer from "multer";

import { pharmacyController } from '../controllers';
import { handlerErrorResult, files,jwt,aws, utils } from '../middlewares';

const storage = multer.memoryStorage();
const upload = multer({storage:storage,limits: { fieldSize: 10 * 1024 * 1024 } })

const router = Router();

router.get('',
            [
             cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).bail().custom((token,{req}) => aws.CognitoValidateUserByToken(req.token)),
             handlerErrorResult
            ],pharmacyController.getLists)

router.post('/upload',
            [
             cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).bail().custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)).bail(),
             upload.array('Catalogo'),
             check('Catalogo').custom((value,{req}) => files.validateExtension('xls','xlsx')(req)).bail(),
             body('Drogueria','Campo inválido').notEmpty(),
             body('Pagina','Campo inválido').notEmpty(),
             body('Valido_desde','Campo inválido').notEmpty(),
             body('Valido_hasta','Campo inválido').notEmpty(),
             handlerErrorResult
            ],
            pharmacyController.uploadList
)

router.get('/stats',
            [
                cookie().exists().withMessage('Ningun token encontrado').bail().custom((value,{req}) => utils.getAccessToken(value,req)).bail().custom((token,{req}) => aws.CognitoValidateUserByToken(req.token,req)),
                handlerErrorResult
            ],
            pharmacyController.getStats
)

export default router;