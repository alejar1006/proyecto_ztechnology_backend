import { DataTypes } from "sequelize";
import db from "../db/connection";              //importo la conección a la base de datos
import Rol from "../models/rol";

const User = db.define('usuarios', {            // nombre de la tabla - especifica los campos de la tabla user en la bd
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    contraseña: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    idRol: {
        type: DataTypes.BIGINT
  },
    creadoPorRol: {
        type: DataTypes.BIGINT
  },

});

//relacion de la tabla user - roles
User.belongsTo(Rol, {
    foreignKey: 'idRol'
})

export default User;                              // exporta la variable con el modelo de la tabla user
    