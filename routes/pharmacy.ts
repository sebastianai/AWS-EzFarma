import { Response,Request, Router } from 'express';
import { body, check } from 'express-validator';

import { pharmacyController } from '../controllers';
import { handlerErrorResult, files } from '../middlewares';
import { validateExtension } from '../middlewares/files';

import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({storage:storage})

const router = Router();

router.get('', (req:Request,res:Response) =>{
    const {id} = req.query
    if(!id) return res.status(400).send('Farmacia no encontrada')
    return res.send(`farmacia id:${id}`)
})

router.post('/upload/:id',
            [
             upload.single('catalogo'),
            check('catalogo').custom((value,{req}) =>validateExtension('xls')(req)),
             handlerErrorResult
            ],
            pharmacyController.uploadList
)

export default router;