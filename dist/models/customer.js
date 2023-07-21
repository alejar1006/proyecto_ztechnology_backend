"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection")); //importo la conección a la base de datos
const Customer = connection_1.default.define('clientes', {
    nombres: {
        type: sequelize_1.DataTypes.STRING
    },
    apellidos: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    creadoPorIdUsuarios: {
        type: sequelize_1.DataTypes.BIGINT
    },
});
exports.default = Customer; // exporta la variable con el modelo de la tabla clientes
