import xlsx from "xlsx";
import * as _ from 'lodash';
import { findBestMatch } from 'string-similarity';

export const transformExcelToJson = (
  file: Buffer,
  sheetName: string,
  callback: CallableFunction
):object[] => {
  const sheet = xlsx.read(file,{sheetRows:1000});
  if (!sheet.SheetNames.includes(sheetName)) {
    return callback(
      `Error, El archivo no contiene la hoja llamada: ${sheetName}, Hojas disponibles: ${sheet.SheetNames} `
    );
  }
  const headerLine = findHeaders(sheet.Sheets[sheetName]);
  return  xlsx.utils.sheet_to_json(sheet.Sheets[sheetName], {range:headerLine}).map((item:object) => {
    const fields = Object.keys(item).filter((name) => {
      const result = findBestMatch(name.toUpperCase(),['DESCRIPCION','DESCRIPCIÓN','PRECIO','OFERTA','LABORATORIO','DESC']).bestMatch
      return result.rating.toFixed(2) > '0.90' ?  true : false
    })
    return _.pick(item,fields)
  })
};

export const transformExcelToCsv = (
  file: Buffer,
  sheetName:string,
  callback:CallableFunction,
  sellType?:string,
  category?:string
):string => {
  let sheet = xlsx.read(file);
  if(!sheet.SheetNames.includes(sheetName)){
    return callback(
      `Error, El archivo no contiene la hoja llamada: ${sheetName}, Hojas disponibles: ${sheet.SheetNames} `
    );
  }
  const headerLine = findHeaders(sheet.Sheets[sheetName]);
  if(sellType && category){
    let json = xlsx.utils.sheet_to_json(sheet.Sheets[sheetName],{header:headerLine,defval:'',raw:true,rawNumbers:true});
    json.forEach((obj:any) => {
      obj['Tipo Venta'] = sellType
      obj['Tipo Producto'] = category || 0
    })
    let newSheet = xlsx.utils.json_to_sheet(json);
    return xlsx.utils.sheet_to_csv(newSheet,{FS:';',RS:'\n',dateNF:'YYYY-MM-dd'})
  }else{
    return xlsx.utils.sheet_to_csv(sheet.Sheets[sheetName],{FS:';',RS:'\n',dateNF:'YYYY-MM-dd'})
  }
}

export const findHeaders = (book: xlsx.WorkSheet): number => {
  var range = xlsx.utils.decode_range(book["!ref"]!);
  let targetRow: number = -1;
  for (var R = range.s.r; R <= range.e.r; ++R) {
    for (var C = range.s.c; C <= range.e.c; ++C) {
      var coord = xlsx.utils.encode_cell({ r: R, c: C }),
        cell = book[coord];
      if (!cell || !cell.v) continue;
      if (cell.t == "s") {
        if (cell.v.toUpperCase().includes("DESCRIPCIÓN") || cell.v.toUpperCase().includes("DESCRIPCION")  || cell.v.toUpperCase().includes("DESC") ) {
          const [,row] = coord.match(/\D+|\d+/g)
          targetRow = Number(row) -1 ;
          return targetRow;
        }
      }
    }
  }

  return targetRow;
};
