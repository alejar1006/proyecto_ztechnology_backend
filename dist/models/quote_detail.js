"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Quote_detail = connection_1.default.define('cotizaciones_detalles', {
    idCotizacion: {
        type: sequelize_1.DataTypes.BIGINT
    },
    idProductos: {
        type: sequelize_1.DataTypes.BIGINT
    },
    cantidad: {
        type: sequelize_1.DataTypes.BIGINT
    },
    total: {
        type: sequelize_1.DataTypes.DECIMAL
    },
});
exports.default = Quote_detail; // exporta la variable con el modelo de la tabla cotizaciones_detalles
