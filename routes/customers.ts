import { Router } from 'express';                       //importamos express
import { saveCustomers, consultCustomers, consultCustomersById, updateCustomer, deleteCustomers } from '../controllers/customers';    //importamos las variables de "customers.ts" de la carpeta controllers
import { validateSaveCustomers } from '../validators/customers';
import validateJWT from '../helpers/validate-jwt';

const router = Router();        // creo variable y asigno Router de express

router.post('/saveCustomers', validateJWT, validateSaveCustomers, saveCustomers);             //ruta para registrar clientes
router.get('/consultCustomers', validateJWT, consultCustomers); 
router.get('/consultCustomers/:id', validateJWT, consultCustomersById);
router.put('/updateCustomer', validateJWT, updateCustomer);
router.delete('/deleteCustomers/:id', validateJWT, deleteCustomers);



export default router;