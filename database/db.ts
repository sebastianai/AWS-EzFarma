import mysql from 'mysql';
import  AWS  from '../AWS';
import { mysqlWhere } from './interfaces';

const db = AWS.DynamoDB;
export const document = AWS.DocumentClient;

class MySQL{
    public db:mysql.Pool;
    constructor(){
        this.db = mysql.createPool({
            host:process.env.RDS_HOSTNAME,
            database:process.env.RDS_DATABASE,
            user:process.env.RDS_USERNAME,
            password:process.env.RDS_PASSWORD,
            multipleStatements:true
        })
    }

    selectAll(table:string,limit:number = 10,offset?:number):Promise<[any,number]>{
        return new Promise((resolve,reject) => {
            const sql:string = `SELECT * FROM ${table} LIMIT ${limit}, ${offset};SELECT COUNT(*) FROM ${table}`;
            this.db.query(sql,(err,result) =>{
                if(err){
                    reject(err)
                }
                resolve([result[0],result[1]])
            })
        })
    }

    select(table:string,primary_key:string | number,column?:string,filters?:mysqlWhere[],...fields:string[]):Promise<[]>{
        return new Promise((resolve,reject) => {
            let sql:string = `show columns from ${table} where `+'`Key`=' + '"PRI";';
            this.db.query(sql,(err,result) =>{
                if(err){
                    reject(err)
                }
                const PrimaryKey = result?.shift()?.Field || column
                if(!PrimaryKey) reject('Ningún PK proveido o encontrado');
                let where = `WHERE ${PrimaryKey} = ${(typeof primary_key === 'string') ? `'${primary_key}'` : primary_key}` ;
                if(filters){
                    filters.forEach((filter,i) => {
                        if(filters.length <= i+1){
                            where += 'AND'
                        }
                        where += ` ${filter.key}${filter.type}${(typeof filter.value === 'string') ? `'${filter.value}'` : filter.value } `
                    })
                }
                sql = `SELECT ${(fields.length > 0) ? fields : '*'} FROM ${table} ${where};`;
                this.db.query(sql,(err,result) => {
                    if(err){
                        reject(err);
                    }
                    resolve(result);
                })
            })
        })
    }

    destroy(){
        this.db.end();
    }
}
export const mySQL = new MySQL();

export default db;