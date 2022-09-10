export interface User{
    email:string;
    password:string;
    info: pharmacy | drogstore;
    address:string;
}

export interface pharmacy{
    name:string;
    enterpriseName:string;
    rut:string;
}

export interface drogstore{
    name:string;
    enterpriseName:string;
    rut:string;
}