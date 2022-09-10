"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("../routes");
class Server {
    constructor() {
        this.express = (0, express_1.default)();
        this.http = (0, http_1.createServer)(this.express);
        this.socket = new socket_io_1.Server(this.http, {
            cors: {
                origin: '*'
            }
        });
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.express.use((0, cors_1.default)({ origin: ['http://localhost:4201', 'http://localhost:4200'], credentials: true }));
        this.express.use((0, cookie_parser_1.default)());
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.static('public'));
    }
    routes() {
        this.express.use('/api/users', routes_1.userRoutes);
        this.express.use('/api/pharmacy', routes_1.pharmacyRoutes);
        this.express.use('/api/marketplace', routes_1.marketPlaceRoutes);
        this.express.use('/api/admin', routes_1.adminRoutes);
        //Angular Routes
        this.express.get('*', (req, res) => {
            res.sendFile(path_1.default.resolve(__dirname, '../public/index.html'));
        });
    }
    listen() {
        this.socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
        this.http.listen(process.env.SOCKET_PORT, () => {
            console.log('Socket inicializado - PORT:', process.env.SOCKET_PORT);
        });
        this.express.listen(process.env.PORT, () => {
            console.log(`Servidor inicialiado - PORT: ${process.env.PORT}`);
        });
    }
}
const server = new Server();
exports.default = server;
//# sourceMappingURL=server.js.map