"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //importamos express
const customers_1 = require("../controllers/customers"); //importamos las variables de "customers.ts" de la carpeta controllers
const customers_2 = require("../validators/customers");
const validate_jwt_1 = __importDefault(require("../helpers/validate-jwt"));
const router = (0, express_1.Router)(); // creo variable y asigno Router de express
router.post('/saveCustomers', validate_jwt_1.default, customers_2.validateSaveCustomers, customers_1.saveCustomers); //ruta para registrar clientes
router.get('/consultCustomers', validate_jwt_1.default, customers_1.consultCustomers);
router.get('/consultCustomers/:id', validate_jwt_1.default, customers_1.consultCustomersById);
router.put('/updateCustomer', validate_jwt_1.default, customers_1.updateCustomer);
router.delete('/deleteCustomers/:id', validate_jwt_1.default, customers_1.deleteCustomers);
exports.default = router;
