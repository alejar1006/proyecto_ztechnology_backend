"use strict";
//configuracion para la base de datos
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); //importa métodos del sequelize
//creo variable de la db
const db = new sequelize_1.Sequelize('db_proyecto', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' //tipo de base de datos
});
exports.default = db; //exporto la variable bd (base de datos)
