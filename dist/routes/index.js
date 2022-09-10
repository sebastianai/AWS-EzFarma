"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = exports.pharmacyRoutes = exports.marketPlaceRoutes = exports.adminRoutes = void 0;
const admin_1 = __importDefault(require("./admin"));
exports.adminRoutes = admin_1.default;
const marketplace_1 = __importDefault(require("./marketplace"));
exports.marketPlaceRoutes = marketplace_1.default;
const pharmacy_1 = __importDefault(require("./pharmacy"));
exports.pharmacyRoutes = pharmacy_1.default;
const users_1 = __importDefault(require("./users"));
exports.userRoutes = users_1.default;
//# sourceMappingURL=index.js.map