import { DataTypes } from "sequelize";
import db from "../db/connection";

const Rol = db.define('roles', {
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    
});

export default Rol;