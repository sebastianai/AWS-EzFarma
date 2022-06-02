import xlsx from "xlsx";

export const transformExcelToJson = (
  file: Express.Multer.File,
  sheetName: string,
  callback: CallableFunction
):object[] => {
  let sheet = xlsx.read(file.buffer,{sheetRows:1000});
  if (!sheet.SheetNames.includes(sheetName)) {
    return callback(
      `Error, El archivo no contiene la hoja llamada: ${sheetName}, Hojas disponibles: ${sheet.SheetNames} `
    );
  }
  const headerLine = findHeaders(sheet.Sheets[sheetName]);
  return  xlsx.utils.sheet_to_json(sheet.Sheets[sheetName], { range: headerLine,blankrows:false,dateNF:'mm/yyyy' })

};

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