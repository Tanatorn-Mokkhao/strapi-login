"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = ({ env }) => ({
    connection: {
        client: 'sqlite',
        connection: {
            filename: path_1.default.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
            // host: env('DATABASE_HOST', '127.0.0.1'),
            // port: env.int('DATABASE_PORT', 3306),
            // database: env('DATABASE_NAME', 'rmw'),
            // user: env('DATABASE_USERNAME', 'root'),
            // password: env('DATABASE_PASSWORD', '12345678'),
        },
        useNullAsDefault: true,
    },
});
