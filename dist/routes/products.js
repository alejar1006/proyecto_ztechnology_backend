"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //importamos express
const products_1 = require("../controllers/products"); //importamos las variables de "products.ts" de la carpeta controllers
const router = (0, express_1.Router)(); // creo variable y asigno Router de express
router.post('/saveProducts', products_1.saveProducts); //ruta para registrar productos
router.get('/consultProducts', products_1.consultProducts);
router.get('/consultProducts/:id', products_1.consultProductById);
router.put('/updateProduct', products_1.updateProduct);
router.delete('/deleteProduct/:id', products_1.deleteProduct);
exports.default = router;
