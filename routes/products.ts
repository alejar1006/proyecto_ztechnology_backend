import { Router } from 'express';                       //importamos express
import { saveProducts, consultProducts, consultProductById, updateProduct, deleteProduct } from '../controllers/products';    //importamos las variables de "products.ts" de la carpeta controllers
//import { validateSaveProducts, validateUpdateProducts } from '../validators/products';
import validateJWT from '../helpers/validate-jwt';


const router = Router();        // creo variable y asigno Router de express

router.post('/saveProducts', saveProducts);             //ruta para registrar productos

router.get('/consultProducts',  consultProducts);

router.get('/consultProducts/:id', consultProductById);

router.put('/updateProduct', updateProduct);

router.delete('/deleteProduct/:id', deleteProduct);


export default router;