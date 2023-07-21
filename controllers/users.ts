//importamos el request y response de express
import { Request, Response } from "express";
//importamos el User del modelo user
import bcrypt from 'bcryptjs';
import User from "../models/user";
import Rol from "../models/rol";

//creamos la variable que hace parte de la logica de esta ruta (consultar usuarios)
//escribimos export para exportar la funcion y poder ser importada en otro lugar



//CONSULTAR
export const consultUsers = async(req: Request, res: Response) => {  //codigo para consultar usuarios
  const users = await User.findAll({
      attributes: ['id', 'nombre', 'correo', 'contraseña', 'estado', 'idRol' ], //lo que deseo que me muestre
         include: [{
             model: Rol,                        //mostrar el rol del usuario
             attributes: ['descripcion']        //mostrar solo la descripcion del rol
         }],
        where: {
            estado: 1    //siempre y cuando esten activos
        }
    })
    
    res.status(200).json({
        msg: 'Consultar Usuarios',
        users
    })
};

//consultar usuario por Id
export const consultUserById = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const user = await User.findByPk(id);

    res.status(200).json({
        user
    })
};

//consultar usuario por Nombre - le indicamos al findAll que consulte solo por el nombre del usuario
export const consultUserByNames = async (req: Request, res: Response) => {

    const { nombre } = req.params;
    const user = await User.findAll({
        where: {
            nombre
        }
    });

    res.status(200).json({
        user

    })
};


//(registrar usuarios)
export const saveUsers = async(req: Request, res: Response) => {
    const {nombre, correo, contraseña, estado, idRol, creadoPorRol} = req.body;                    //obtiene los campos del body de postman (saveUser)

    const user = await User.create({ nombre, correo, contraseña, estado, idRol, creadoPorRol});   //crea registro en campos del mysql (heidisql)

    res.status(200).json({
        msg: `Se ha registrado el Usuario con el ID: ${user.dataValues.id}`    //"user.dataValues.id"=obtiene id
    })
}

//(ACTUALIZAR USUARIOS)
export const updateUser = async (req: Request, res: Response) => {
    const { id, nombre, correo, contraseña, estado, idRol } = req.body;                //obtiene los campos del body de postman (updateUser)

    const user = await User.update({ nombre, correo, contraseña, estado, idRol }, {
        where: {
            id          //se actualiza por el id
        }
    });   //crea registro en campos del mysql (heidisql)
    res.status(200).json({
        msg: `El Usuario con el ID: ${id} ha sido actualizado`
    })
};

//(ELIMINAR USUARIOS)
/*export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.body;                      //se elimina por id - por parametro

     const user = await User.destroy({
        where: {
            id          //se elimina por el id
        }
    });
    res.status(200).json({
        msg: `El Usuario con el ID: ${id} ha sido eliminado`
    })
};
*/

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    await User.destroy({
        where: {
            id
        }
    }); 

    res.status(200).json({
        msg: `El Usuario con el ID: ${id} ha sido eliminado`
    })
};


