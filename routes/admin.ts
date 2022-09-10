import { Router } from 'express';
import { check, cookie, query } from 'express-validator';
import multer from "multer";

import { adminController } from '../controllers';
import { handlerErrorResult, files } from '../middlewares';

const storage = multer.memoryStorage();
const upload = multer({storage:storage,limits: { fieldSize: 10 * 1024 * 1024 } })

const router = Router();

router.post('/upload',
            [
            // cookie('token'),
             upload.single('Catalogo'),
            check('Catalogo').custom((value,{req}) => files.validateExtension('xls','xlsx')(req)),
            query('sheet').notEmpty(),
            query('venta','Opción inválida').optional().notEmpty().isIn(['Directa', 'Receta Médica', 'Receta Médica Retenida','Receta Cheque']),
             handlerErrorResult
            ],
            adminController.updateMaster
)

export default router;