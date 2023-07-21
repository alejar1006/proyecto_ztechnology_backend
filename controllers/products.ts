import { Request, Response } from 'express';
import Product from '../models/product';            //importo el modelo de los productos
import User from '../models/user';                  //importo el modelo de los usuarios



// (REGISTRAR PRODUCTOS)
export const saveProducts = async (req: Request, res: Response) => {

    const { nombre, caracteristicas, valorUnitario } = req.body;  //estos campos son los que se envian al postman
    const user = await User.findOne({
        
    });

    //crear los registros de estos campos en la base de datos
    const product = await Product.create({ nombre, caracteristicas, valorUnitario, idUsuario: user?.dataValues.id });

    res.status(200).json({
        msg: `Se ha registrado un nuevo producto con el ID: ${product.dataValues.id}`    //"obtiene id del producto
    });
};


// CONSULTAR PRODUCTO
export const consultProducts = async (req: Request, res: Response) => {
    
    const products = await Product.findAll();              //findAll consulta todo los datos de esa tabla
    
    res.status(200).json({
        msg: 'Consultar Productos',
        products,
    })
};


//CONSULTAR PRODUCTO POR ID
export const consultProductById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (product) {
        res.status(200).json({
            product
        })
    } else {
        res.status(404).json({
            msg: `El producto no existe`
        })
    }
};

//ACTUALIZAR PRODUCTO
export const updateProduct = async (req: Request, res: Response) => {
    const { id, nombre, caracteristicas, valorUnitario } = req.body;                //obtiene los campos del body de postman (updateUser)

    const product = await Product.update({ nombre, caracteristicas, valorUnitario }, {  //crea registro en campos del mysql (heidisql)
        where: {
            id          //se actualiza por el id
        }
    });

    res.status(200).json({
        msg: `El Producto con el ID: ${id} ha sido actualizado`
    })
};


//ELIMINAR PRODUCTO
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;                      //se elimina por id - por parametro

    await Product.destroy({
        where: {
            id          //se elimina por el id
        }
    });   

    res.status(200).json({
        msg: `El Producto con el ID: ${id} ha sido eliminado`
    })
};


