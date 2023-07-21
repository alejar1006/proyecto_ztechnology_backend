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
exports.deleteCustomers = exports.updateCustomer = exports.consultCustomersById = exports.consultCustomers = exports.saveCustomers = void 0;
const customer_1 = __importDefault(require("../models/customer")); //importo el modelo de los clientes
//creamos la variable que hace parte de la logica de esta ruta (REGISTRAR CLIENTES)
const saveCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombres, apellidos, correo, telefono, direccion, descripcion, creadoPorIdUsuarios } = req.body; //estos campos son los que se envian al postman
    //crear los registros de estos campos en la base de datos
    const customer = yield customer_1.default.create({ nombres, apellidos, correo, telefono, direccion, descripcion, creadoPorIdUsuarios });
    res.status(200).json({
        msg: `Se ha registrado un nuevo cliente con el ID: ${customer.dataValues.id}` //"obtiene id del cliente
    });
});
exports.saveCustomers = saveCustomers;
//consultar todos los clientes
const consultCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield customer_1.default.findAll(); //"Customer" es la variable del modelo del cliente, el "findAll" consulta los datos registrados en la tabla clientes de la base de datos.
    res.status(200).json({
        msg: 'Consultar Clientes',
        customers,
    });
});
exports.consultCustomers = consultCustomers;
//consultar clientes por ID
const consultCustomersById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const customers = yield customer_1.default.findByPk(id);
    if (customers) {
        res.status(200).json({
            customers
        });
    }
    else {
        res.status(404).json({
            msg: `El cliente no existe`
        });
    }
});
exports.consultCustomersById = consultCustomersById;
const updateCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, nombres, apellidos, correo, telefono, direccion, descripcion } = req.body; //obtiene los campos del body de postman (updateUser)
    const customers = yield customer_1.default.update({ nombres, apellidos, correo, telefono, direccion, descripcion }, {
        where: {
            id //se actualiza por el id
        }
    });
    res.status(200).json({
        msg: `El cliente con el ID: ${id} ha sido actualizado`
    });
});
exports.updateCustomer = updateCustomer;
//eliminar clientes
const deleteCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; //se elimina por id - por parametro
    yield customer_1.default.destroy({
        where: {
            id //se elimina por el id
        }
    });
    res.status(200).json({
        msg: `El cliente con el ID: ${id} ha sido eliminado`
    });
});
exports.deleteCustomers = deleteCustomers;
