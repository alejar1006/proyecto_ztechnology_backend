import { Request, Response } from 'express';
import Customer from '../models/customer';            //importo el modelo de los clientes


//creamos la variable que hace parte de la logica de esta ruta (REGISTRAR CLIENTES)
export const saveCustomers = async (req: Request, res: Response) => {

    const { nombres, apellidos, correo, telefono, direccion, descripcion, creadoPorIdUsuarios } = req.body;  //estos campos son los que se envian al postman
   
    //crear los registros de estos campos en la base de datos
    const  customer= await Customer.create({nombres, apellidos, correo, telefono, direccion, descripcion, creadoPorIdUsuarios  });

    res.status(200).json({
        msg: `Se ha registrado un nuevo cliente con el ID: ${customer.dataValues.id}`    //"obtiene id del cliente
    });
};


//consultar todos los clientes
export const consultCustomers = async (req: Request, res: Response) => {
    
    const customers = await Customer.findAll();     //"Customer" es la variable del modelo del cliente, el "findAll" consulta los datos registrados en la tabla clientes de la base de datos.
    
    res.status(200).json({
        msg: 'Consultar Clientes',
       customers,
    })
};


//consultar clientes por ID
export const consultCustomersById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const customers = await Customer.findByPk(id);

    if (customers) {
        res.status(200).json({
            customers
        })
    } else {
        res.status(404).json({
            msg: `El cliente no existe`
        })
    }
};


export const updateCustomer = async (req: Request, res: Response) => {
    const { id, nombres, apellidos, correo, telefono, direccion, descripcion } = req.body;                //obtiene los campos del body de postman (updateUser)

    const customers = await Customer.update({ nombres, apellidos, correo, telefono, direccion, descripcion }, {  //crea registro en campos del mysql (heidisql)
        where: {
            id          //se actualiza por el id
        }
    });

    res.status(200).json({
        msg: `El cliente con el ID: ${id} ha sido actualizado`
    })
};


//eliminar clientes
export const deleteCustomers = async (req: Request, res: Response) => {
    const { id } = req.params;                      //se elimina por id - por parametro

    await Customer.destroy({
        where: {
            id          //se elimina por el id
        }
    });   

    res.status(200).json({
        msg: `El cliente con el ID: ${id} ha sido eliminado`
    })
};




