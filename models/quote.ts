import { DataTypes } from "sequelize";
import db from "../db/connection";

const Quote = db.define('cotizaciones', {        // nombre de la tabla - especifica los campos de la tabla cotizaciones en la bd
    detalle: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.DECIMAL
    },
    idUsuario: {
        type: DataTypes.BIGINT
    },
    idCliente: {
        type: DataTypes.BIGINT
    },
    
    
});

export default Quote;                              // exporta la variable con el modelo de la tabla cotizaciones
    