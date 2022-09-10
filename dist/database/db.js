"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySQL = exports.document = void 0;
const mysql_1 = __importDefault(require("mysql"));
const AWS_1 = __importDefault(require("../AWS"));
const db = AWS_1.default.DynamoDB;
exports.document = AWS_1.default.DocumentClient;
class MySQL {
    constructor() {
        this.db = mysql_1.default.createPool({
            host: process.env.RDS_HOSTNAME,
            database: process.env.RDS_DATABASE,
            user: process.env.RDS_USERNAME,
            password: process.env.RDS_PASSWORD,
            multipleStatements: true
        });
        this.db.getConnection((err) => {
            if (err)
                throw Error(`Database Exception ${err.message}`);
        });
    }
    selectAll(table, limit = 10, offset, like, orderby) {
        return new Promise((resolve, reject) => {
            let where = '';
            if (like) {
                where = `WHERE ${Object.keys(like)[0]} LIKE '%${Object.values(like)[0]}%'`;
            }
            let order = '';
            if (orderby) {
                order = `ORDER BY ${Object.keys(orderby)[0]} ${Object.values(orderby)[0]}`;
            }
            const sql = `SELECT * FROM ${table} ${where} ${order} LIMIT ${limit}, ${offset};SELECT COUNT(*) FROM ${table} ${where};`;
            this.db.query(sql, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve([result[0], result[1]]);
            });
        });
    }
    select(table, primary_key, column, filters, ...fields) {
        return new Promise((resolve, reject) => {
            let sql = `show columns from ${table} where ` + '`Key`=' + '"PRI";';
            this.db.query(sql, (err, result) => {
                var _a;
                if (err) {
                    reject(err);
                }
                const PrimaryKey = ((_a = result === null || result === void 0 ? void 0 : result.shift()) === null || _a === void 0 ? void 0 : _a.Field) || column;
                if (!PrimaryKey)
                    reject('Ningún PK proveido o encontrado');
                let where = `WHERE ${PrimaryKey} = ${(typeof primary_key === 'string') ? `'${primary_key}'` : primary_key}`;
                if (filters) {
                    filters.forEach((filter, i) => {
                        if (filters.length <= i + 1) {
                            where += 'AND';
                        }
                        where += ` ${filter.key}${filter.type}${(typeof filter.value === 'string') ? `'${filter.value}'` : filter.value} `;
                    });
                }
                sql = `SELECT ${(fields.length > 0) ? fields : '*'} FROM ${table} ${where};`;
                this.db.query(sql, (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }
    destroy() {
        this.db.end();
    }
}
exports.mySQL = new MySQL();
exports.default = db;
//# sourceMappingURL=db.js.map