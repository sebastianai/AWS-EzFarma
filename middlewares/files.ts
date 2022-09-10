import { Request } from "express-validator/src/base";

export const validateExtension = (extension: string, ...args: string[]) =>(req: Request) => {
    if(!(req?.files ?? req?.file ?? undefined)){
      throw Error('Ningún archivo encontrado.')
    }
    if(req.files){
      req.files.forEach((elem:Express.Multer.File) => {
        const fileName:string = elem.originalname;
        const results = fileName.split('.');
        const fileExtension:string = results[results.length - 1].toLowerCase();
        if(fileExtension != extension && !args.includes(fileExtension)){
          throw Error(`El tipo de archivo ${fileExtension} no es compatible \n TIP: ${extension} ${args}`)
        };
      });
    }
    if(req.file){
      const fileName:string = req.file.originalname;
        const fileExtension:string = fileName.split('.').at(-1)!.toLowerCase();
        if(fileExtension != extension && !args.includes(fileExtension)){
          throw Error(`El tipo de archivo ${fileExtension} no es compatible \n TIP: ${extension} ${args}`)
        };
    }
    return true
};
