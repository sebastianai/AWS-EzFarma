

export const validateExtension = (extension: string, ...args: string[]) =>(req: any) => {
    if(!req?.files){
      throw Error('Ningún archivo encontrado.')
    }
    if(req.files){
      req.files.forEach((elem:Express.Multer.File) => {
        const fileName:string = elem.originalname;
        const fileExtension:string = fileName.split('.').at(-1)!.toLowerCase();
        if(fileExtension != extension && !args.includes(fileExtension)){
          throw Error(`El tipo de archivo ${fileExtension} no es compatible \n TIP: ${extension} ${args}`)
        };
      });
    }
    return true
};
