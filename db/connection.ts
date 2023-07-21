//configuracion para la base de datos

import { Sequelize, Model, DataTypes } from 'sequelize';    //importa métodos del sequelize

//creo variable de la db
const db = new Sequelize('db_proyecto', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'                                        //tipo de base de datos
})

export default db;                                          //exporto la variable bd (base de datos)