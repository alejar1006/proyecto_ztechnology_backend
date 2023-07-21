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
exports.saveQuote = exports.deleteQuote = exports.updateQuote = exports.consultQuoteById = exports.consultQuote = void 0;
const quote_1 = __importDefault(require("../models/quote"));
const quote_detail_1 = __importDefault(require("../models/quote_detail"));
const consultQuote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quotes = yield quote_1.default.findAll({
        attributes: ['detalle', 'precio', 'idUsuario', 'idCliente'],
    });
    res.status(200).json({
        msg: 'Consultar cotizaciones',
        quotes
    });
});
exports.consultQuote = consultQuote;
const consultQuoteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const quotes = yield quote_1.default.findByPk(id);
    res.status(200).json({
        quotes
    });
});
exports.consultQuoteById = consultQuoteById;
const updateQuote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, detalle, precio, idUsuario, idCliente, productos } = req.body;
    const quote = yield quote_1.default.update({ detalle, precio, idUsuario, idCliente, productos }, {
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `La cotizacion con el ID: ${id} ha sido actualizada`
    });
});
exports.updateQuote = updateQuote;
//ELIMINAR
const deleteQuote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield quote_1.default.destroy({
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `La cotzacion con el ID: ${id} ha sido eliminado`
    });
});
exports.deleteQuote = deleteQuote;
//REGISTRAR COTIZACION
const saveQuote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { detalle, precio, idUsuario, idCliente, productos } = req.body;
    // Crear la cotización
    const quote = yield quote_1.default.create({
        detalle,
        precio,
        idUsuario,
        idCliente,
    });
    //REGISTRAR PRODUCTOS RELACIONADOS A LA COTIZACION
    for (const product of productos) {
        yield quote_detail_1.default.create({
            idCotizacion: quote.dataValues.id,
            idProductos: product.idProductos,
            cantidad: product.cantidad,
            total: product.total,
        });
    }
    res.status(201).json({ message: 'Cotización registrada exitosamente' });
});
exports.saveQuote = saveQuote;
