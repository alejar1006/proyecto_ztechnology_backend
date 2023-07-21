import { DataTypes } from "sequelize";
import db from "../db/connection";              //importo la conección a la base de datos

const Product = db.define('productos', {            // nombre de la tabla - especifica los campos de la tabla Product en la bd
    nombre: {
        type: DataTypes.STRING
    },
    caracteristicas: {
        type: DataTypes.STRING
    },
    valorUnitario: {
        type: DataTypes.DECIMAL
    },
    idUsuario: {
        type: DataTypes.BIGINT
    },
    
});

export default Product;                              // exporta la variable con el modelo de la tabla Product
    