"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Client = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const REGION = "us-east-1";
const s3Client = new client_s3_1.S3Client({ region: REGION });
exports.s3Client = s3Client;
//# sourceMappingURL=client.js.map