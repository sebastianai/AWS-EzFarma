export const validateExtension = (extension: string, ...args: string[]) =>(req: any) => {
    if(!req?.file && !req?.files){
      throw Error('Ningún archivo encontrado.')
    }
    if(req.file){
      const filename = req.file.originalname;
      const fileExtension = filename.split('.').at(-1)?.toLowerCase();
      if(fileExtension != extension && !args.includes(fileExtension)){
        throw Error(`El tipo de archivo ${fileExtension} no es compatible\nTIP: ${extension} ${args}`)
      };
    }
    return true
};
