"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importar metodo de express
const express_1 = require("express");
//importar variable del codigo de consultar usuarios
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)(); //creo variable y asigno Router de express
router.get('/consultUsers', users_1.consultUsers); //creo ruta 'consultar usuarios'
router.get('/consultUsers/:id', users_1.consultUserById); //creo ruta 'consultar usuario por id'
router.get('/consultUserByNames/:nombre', users_1.consultUserByNames); //ruta "consulta por nombre"
router.post('/saveUsers', users_1.saveUsers); //creo ruta 'registrar usuarios'
router.put('/updateUser', users_1.updateUser); //creo ruta 'actualizar usuarios'
router.delete('/deleteUser/:id', users_1.deleteUser);
exports.default = router; //exportar ruta
