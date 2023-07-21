"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection")); //importo la conección a la base de datos
const Product = connection_1.default.define('productos', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    caracteristicas: {
        type: sequelize_1.DataTypes.STRING
    },
    valorUnitario: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    idUsuario: {
        type: sequelize_1.DataTypes.BIGINT
    },
});
exports.default = Product; // exporta la variable con el modelo de la tabla Product
