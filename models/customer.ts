import { DataTypes } from "sequelize";
import db from "../db/connection";              //importo la conección a la base de datos

const Customer = db.define('clientes', {        // nombre de la tabla - especifica los campos de la tabla clientes en la bd
    nombres: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    creadoPorIdUsuarios: {
        type: DataTypes.BIGINT
    },
    
});

export default Customer;                              // exporta la variable con el modelo de la tabla clientes
    