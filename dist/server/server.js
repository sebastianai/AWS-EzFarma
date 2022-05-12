"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("../routes");
class Server {
    constructor() {
        this.express = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.express.use((0, cors_1.default)());
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.static('public'));
    }
    routes() {
        this.express.use('/api/users', routes_1.userRoutes);
        this.express.use('/api/pharmacy', routes_1.pharmacyRoutes);
        //Angular Routes
        this.express.get('*', (req, res) => {
            res.sendFile(path_1.default.resolve(__dirname, '../public/index.html'));
        });
    }
    listen() {
        this.express.listen(process.env.PORT, () => {
            console.log(`Servidor inicialiado - PORT: ${process.env.PORT}`);
        });
    }
}
exports.default = Server;
