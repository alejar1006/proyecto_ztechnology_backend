import { DataTypes } from "sequelize";
import db from "../db/connection";

const Quote_detail = db.define('cotizaciones_detalles', {        // nombre de la tabla - especifica los campos de la tabla cotizaciones_detalles en la bd
    idCotizacion: {
        type: DataTypes.BIGINT
    },
    idProductos: {
        type: DataTypes.BIGINT
    },
    cantidad: {
        type: DataTypes.BIGINT
    },
    total: {
        type: DataTypes.DECIMAL
    },
    
    
});

export default Quote_detail;                              // exporta la variable con el modelo de la tabla cotizaciones_detalles