"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateCustomers = exports.validateSaveCustomers = void 0;
const express_validator_1 = require("express-validator");
//VALIDACION REGISTRAR CLIENTES
exports.validateSaveCustomers = [
    (0, express_validator_1.check)('nombres')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del cliente')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    (0, express_validator_1.check)('apellidos')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el apellido del cliente')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    (0, express_validator_1.check)('correo')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el Correo electronico del cliente ')
        .isEmail().withMessage('Ingresa un formato de correo valido '),
    (0, express_validator_1.check)('telefono')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el numero telefonico del cliente ')
        .isNumeric().withMessage('El telefono debe ser numerico '),
    (0, express_validator_1.check)('direccion')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa la direccion del cliente '),
    (0, express_validator_1.check)('creadoPorIdUsuarios')
        .exists()
        .not()
        .isEmpty().withMessage('Se requiere el Id de quien se encuentra realizando el registro')
        .isNumeric().withMessage('El valor debe ser numerico '),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
//VALIDACION ACTUALIZAR CLIENTES
exports.validateUpdateCustomers = [
    (0, express_validator_1.check)('nombres')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del cliente')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    (0, express_validator_1.check)('apellidos')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el apellido del cliente')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    (0, express_validator_1.check)('correo')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el Correo electronico del cliente ')
        .isEmail().withMessage('Ingresa un formato de correo valido '),
    (0, express_validator_1.check)('telefono')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el numero telefonico del cliente ')
        .isNumeric().withMessage('El telefono debe ser numerico '),
    (0, express_validator_1.check)('direccion')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa la direccion del cliente '),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
