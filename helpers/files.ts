import xlsx from "xlsx";

export const transformExcelToJson = (
  file: Express.Multer.File,
  sheetName: string,
  callback: CallableFunction
):object[] => {
<<<<<<< HEAD
  let sheet = xlsx.read(file.buffer,{sheetRows:1000});
=======
  let sheet = xlsx.read(file.buffer,{sheetRows:2000});
>>>>>>> fffd16d59cb92c7a32ac702c4c385cc5cca41f79
  if (!sheet.SheetNames.includes(sheetName)) {
    return callback(
      `Error, El archivo no contiene la hoja llamada: ${sheetName}, Hojas disponibles: ${sheet.SheetNames} `
    );
  }
  const headerLine = findHeaders(sheet.Sheets[sheetName]);
  return  xlsx.utils.sheet_to_json(sheet.Sheets[sheetName], { range: headerLine,blankrows:false,dateNF:'mm/yyyy' })
};

export const transformExcelToCsv = (
  file:Express.Multer.File,
  sheetName:string,
  sellType:string,
  callback:CallableFunction,
  category?:string
) => {
  let sheet = xlsx.read(file.buffer)
  if(!sheet.SheetNames.includes(sheetName)){
    return callback(
      `Error, El archivo no contiene la hoja llamada: ${sheetName}, Hojas disponibles: ${sheet.SheetNames} `
    );
  }
  let json = xlsx.utils.sheet_to_json(sheet.Sheets[sheetName],{header:0,defval:'',raw:true,rawNumbers:true});
  json.forEach((obj:any) => {
    obj['Tipo Venta'] = sellType
    obj['Tipo Producto'] = category || 0
  })
  let newSheet = xlsx.utils.json_to_sheet(json);
  return xlsx.utils.sheet_to_csv(newSheet,{FS:';',RS:'\n',dateNF:'YYYY-MM-dd'})
}

export const findHeaders = (book: xlsx.WorkSheet): Number => {
  var range = xlsx.utils.decode_range(book["!ref"]!);
  let targetRow: Number = -1;
  for (var R = range.s.r; R <= range.e.r; ++R) {
    for (var C = range.s.c; C <= range.e.c; ++C) {
      var coord = xlsx.utils.encode_cell({ r: R, c: C }),
        cell = book[coord];
      if (!cell || !cell.v) continue;
      if (cell.t == "s") {
        if (cell.v.includes("Desc")) {
          targetRow = Number(coord.at(-1)) - 1;
          return targetRow;
        }
      }
    }
  }

  return targetRow;
};
