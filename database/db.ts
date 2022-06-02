import mysql from 'mysql';
import  AWS  from '../AWS';

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

    selectAll(table:string,limit:number = 10,offset?:number){
        return new Promise((resolve,reject) => {
            const sql:string = `SELECT * FROM ${table} LIMIT ${limit}, ${offset};`;
            this.db.query(sql,(err,result,fields) =>{
                if(err){
                    reject(err)
                }
                resolve(result)
            })
        })
    }

    destroy(){
        this.db.end();
    }
}
export const mySQL = new MySQL()

export default db;