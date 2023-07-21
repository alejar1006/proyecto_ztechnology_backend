"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Quote = connection_1.default.define('cotizaciones', {
    detalle: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    idUsuario: {
        type: sequelize_1.DataTypes.BIGINT
    },
    idCliente: {
        type: sequelize_1.DataTypes.BIGINT
    },
});
exports.default = Quote; // exporta la variable con el modelo de la tabla cotizaciones
