"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection")); //importo la conección a la base de datos
const rol_1 = __importDefault(require("../models/rol"));
const User = connection_1.default.define('usuarios', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    contraseña: {
        type: sequelize_1.DataTypes.STRING
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    idRol: {
        type: sequelize_1.DataTypes.BIGINT
    },
    creadoPorRol: {
        type: sequelize_1.DataTypes.BIGINT
    },
});
//relacion de la tabla user - roles
User.belongsTo(rol_1.default, {
    foreignKey: 'idRol'
});
exports.default = User; // exporta la variable con el modelo de la tabla user
