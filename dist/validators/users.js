"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeleteUser = exports.validateUpdateUser = exports.validateSaveUser = void 0;
const express_validator_1 = require("express-validator");
//VALIDAR - CREAR USUARIO
exports.validateSaveUser = [
    (0, express_validator_1.check)('nombre')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del usuario')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    (0, express_validator_1.check)('correo')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese un correo electronico')
        .isEmail().withMessage('ingresar formato de email correcto'),
    (0, express_validator_1.check)('contraseña')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese una contraseña')
        .isLength({ min: 6 }).withMessage('La contraseña debe ser de minimo 6 caracteres'),
    (0, express_validator_1.check)('estado')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor asigne un estado'),
    (0, express_validator_1.check)('idRol')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor asigne un rol'),
    (0, express_validator_1.check)('creadoPorRol')
        .exists()
        .not()
        .isEmpty().withMessage('por favor identique su rol')
        .isNumeric().withMessage('por favor ingrese su rol en valor numerico')
        .custom((value, { req }) => {
        if (value == 2) {
            throw new Error('Invalido, los gestores no tienen acceso a crear usuarios.');
        }
        if (value < 1) {
            throw new Error('El rol no existe.');
        }
        if (value > 2) {
            throw new Error('El rol no existe.');
        }
        return true;
    }),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
//VALIDAR - ACTUALIZAR USUARIO
exports.validateUpdateUser = [
    (0, express_validator_1.check)('id')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del usuario a modificar'),
    (0, express_validator_1.check)('nombre')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del usuario a modificar')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    (0, express_validator_1.check)('correo')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese un correo electronico a modificar')
        .isEmail().withMessage('ingresar formato de email correcto'),
    (0, express_validator_1.check)('contraseña')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese una contraseña')
        .isLength({ min: 6 }).withMessage('La contraseña debe ser de minimo 6 caracteres'),
    (0, express_validator_1.check)('estado')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor asigne un estado a modificar'),
    (0, express_validator_1.check)('idRol')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor asigne un rol a modificar'),
    (0, express_validator_1.check)('creadoPorRol')
        .exists()
        .not()
        .isEmpty().withMessage('por favor identique su rol')
        .isNumeric().withMessage('por favor ingrese su rol en valor numerico')
        .custom((value, { req }) => {
        if (value == 2) {
            throw new Error('Invalido, los gestores no tienen acceso a modificar usuarios.');
        }
        if (value < 1) {
            throw new Error('El rol no existe.');
        }
        if (value > 2) {
            throw new Error('El rol no existe.');
        }
        return true;
    }),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
//VALIDAR - ELIMINAR USUARIO
exports.validateDeleteUser = [
    (0, express_validator_1.check)('id')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del usuario a eliminar'),
    (0, express_validator_1.check)('creadoPorRol')
        .exists()
        .not()
        .isEmpty().withMessage('por favor identique su rol')
        .isNumeric().withMessage('por favor ingrese su rol en valor numerico')
        .custom((value, { req }) => {
        if (value == 2) {
            throw new Error('Invalido, los gestores no tienen acceso a eliminar usuarios.');
        }
        if (value < 1) {
            throw new Error('El rol no existe.');
        }
        if (value > 2) {
            throw new Error('El rol no existe.');
        }
        return true;
    }),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
