import { Response,Request, Router } from 'express';
import { body, check, param, cookie } from 'express-validator';
import multer from "multer";

import { marketPlaceController } from '../controllers';
import { handlerErrorResult, files,jwt,aws } from '../middlewares';

const storage = multer.memoryStorage();
const upload = multer({storage:storage,limits: { fieldSize: 10 * 1024 * 1024 } })

const router = Router();

router.get('' ,marketPlaceController.getProducts)

export default router