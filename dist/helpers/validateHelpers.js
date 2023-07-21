"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
//este codigo me ayuda a traer los resultados de mis validaciones
const validateResult = (req, res, next) => {
    try {
        (0, express_validator_1.validationResult)(req).throw();
        return next();
    }
    catch (err) {
        express_1.response.status(403);
        express_1.response.send(err);
    }
};
exports.default = validateResult;
