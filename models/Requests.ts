export interface Dictionary<T> {
    [key: string]: T;
  }
  
  export type ParamsDictionary = Dictionary<string>;
  export type ParamsArray = string[];
  export type Params = ParamsDictionary | ParamsArray;

export interface GetCustomParams<T extends ParamsDictionary> extends Request {
    params: T;
  }