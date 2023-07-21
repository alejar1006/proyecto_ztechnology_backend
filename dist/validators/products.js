"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateProducts = exports.validateSaveProducts = void 0;
const express_validator_1 = require("express-validator");
//VALIDACION REGISTRAR PRODUCTOS
exports.validateSaveProducts = [
    (0, express_validator_1.check)('nombre')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del producto')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    (0, express_validator_1.check)('caracteristicas')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese un producto'),
    (0, express_validator_1.check)('valorUnitario')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el precio del producto'),
    (0, express_validator_1.check)('correo')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el Correo electronico de quien realiza el registro del producto'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
//VALIDACION ACTUALIZAR PRODUCTOS
exports.validateUpdateProducts = [
    (0, express_validator_1.check)('id')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del producto'),
    (0, express_validator_1.check)('caracteristicas')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese la caracteristica del producto'),
    (0, express_validator_1.check)('valorUnitario')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el precio del producto'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
