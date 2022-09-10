export interface Dictionary<T> {
    [key: string]: T;
  }
  
  export type ParamsDictionary = Dictionary<string>;
  export type ParamsArray = string[];
  export type Params = ParamsDictionary | ParamsArray;

export interface GetCustomParams<T extends ParamsDictionary> extends Request {
    params: T;
}

export interface orden_farmacia{
  ID:             number;
  FARMACIA_ID:    number;
  FECHA_CREACION: Date;
  GRANDTOTAL:     number;
  ID_COMPRA:      number;
}

export interface catalogos_farmacia {
  NOMBRE:       string;
  FECHA_CARGA:  Date;
  VALIDO_DESDE: Date;
  VALIDO_HASTA: Date;
}

export interface catalogos_list{
  NOMBRE:     string;
  FECHA_CARGA:  Date;
  VALIDEZ:    Periodo;
}

export interface Periodo{
  [mes:string]: [Date,Date] | []
}

export interface Compra{
  ID_COMPRA:      number;
  ORDENES:        String[];
  FECHA_CRECION:  Date;
  TOTAL:          number;
  ESTADO:         number[];
}

export interface RowDataPacketStatus {
  fieldCount:   number;
  affectedRows: number;
  insertId:     number;
  serverStatus: number;
  warningCount: number;
  message:      string;
  protocol41:   boolean;
  changedRows:  number;
}

