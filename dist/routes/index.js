"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pharmacyRoutes = exports.userRoutes = void 0;
const users_1 = __importDefault(require("./users"));
exports.userRoutes = users_1.default;
const pharmacy_1 = __importDefault(require("./pharmacy"));
exports.pharmacyRoutes = pharmacy_1.default;
