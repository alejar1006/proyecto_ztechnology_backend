"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateQuote = exports.validateSaveQuote = void 0;
const express_validator_1 = require("express-validator");
exports.validateSaveQuote = [
    (0, express_validator_1.check)('detalle')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese los detalles de la cotizacion')
        .isLength({ min: 6 }).withMessage('Debe tener minimo 6 caracteres'),
    (0, express_validator_1.check)('precio')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el valor total de la cotizacion')
        .isNumeric().withMessage('ingresar valor numerico'),
    (0, express_validator_1.check)('idUsuario')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del usuario')
        .isNumeric().withMessage('ingresar valor numerico'),
    (0, express_validator_1.check)('idCliente')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del cliente')
        .isNumeric().withMessage('ingresar valor numerico'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
exports.validateUpdateQuote = [
    (0, express_validator_1.check)('id')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el ID de la cotizacion a modificar')
        .isNumeric().withMessage('ingresar valor numerico'),
    (0, express_validator_1.check)('detalle')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese los detalles de la cotizacion')
        .isLength({ min: 6 }).withMessage('Debe tener minimo 6 caracteres'),
    (0, express_validator_1.check)('precio')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el valor total de la cotizacion')
        .isNumeric().withMessage('ingresar valor numerico'),
    (0, express_validator_1.check)('idUsuario')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del usuario')
        .isNumeric().withMessage('ingresar valor numerico'),
    (0, express_validator_1.check)('idCliente')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del cliente')
        .isNumeric().withMessage('ingresar valor numerico'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
