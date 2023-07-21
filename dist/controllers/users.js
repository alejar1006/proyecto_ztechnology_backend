"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.saveUsers = exports.consultUserByNames = exports.consultUserById = exports.consultUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const rol_1 = __importDefault(require("../models/rol"));
//creamos la variable que hace parte de la logica de esta ruta (consultar usuarios)
//escribimos export para exportar la funcion y poder ser importada en otro lugar
//CONSULTAR
const consultUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll({
        attributes: ['id', 'nombre', 'correo', 'contraseña', 'estado', 'idRol'],
        include: [{
                model: rol_1.default,
                attributes: ['descripcion'] //mostrar solo la descripcion del rol
            }],
        where: {
            estado: 1 //siempre y cuando esten activos
        }
    });
    res.status(200).json({
        msg: 'Consultar Usuarios',
        users
    });
});
exports.consultUsers = consultUsers;
//consultar usuario por Id
const consultUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    res.status(200).json({
        user
    });
});
exports.consultUserById = consultUserById;
//consultar usuario por Nombre - le indicamos al findAll que consulte solo por el nombre del usuario
const consultUserByNames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    const user = yield user_1.default.findAll({
        where: {
            nombre
        }
    });
    res.status(200).json({
        user
    });
});
exports.consultUserByNames = consultUserByNames;
//(registrar usuarios)
const saveUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, correo, contraseña, estado, idRol, creadoPorRol } = req.body; //obtiene los campos del body de postman (saveUser)
    const user = yield user_1.default.create({ nombre, correo, contraseña, estado, idRol, creadoPorRol }); //crea registro en campos del mysql (heidisql)
    res.status(200).json({
        msg: `Se ha registrado el Usuario con el ID: ${user.dataValues.id}` //"user.dataValues.id"=obtiene id
    });
});
exports.saveUsers = saveUsers;
//(ACTUALIZAR USUARIOS)
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, nombre, correo, contraseña, estado, idRol } = req.body; //obtiene los campos del body de postman (updateUser)
    const user = yield user_1.default.update({ nombre, correo, contraseña, estado, idRol }, {
        where: {
            id //se actualiza por el id
        }
    }); //crea registro en campos del mysql (heidisql)
    res.status(200).json({
        msg: `El Usuario con el ID: ${id} ha sido actualizado`
    });
});
exports.updateUser = updateUser;
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
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield user_1.default.destroy({
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `El Usuario con el ID: ${id} ha sido eliminado`
    });
});
exports.deleteUser = deleteUser;
