//importar metodo de express
import { Router } from 'express';
//importar variable del codigo de consultar usuarios
import { consultUsers, consultUserById, consultUserByNames, saveUsers, updateUser, deleteUser } from '../controllers/users';

import { validateSaveUser, validateUpdateUser, validateDeleteUser} from '../validators/users';
import validateJWT from '../helpers/validate-jwt';


const router = Router();       //creo variable y asigno Router de express

router.get('/consultUsers',  consultUsers);  //creo ruta 'consultar usuarios'

router.get('/consultUsers/:id',  consultUserById)     //creo ruta 'consultar usuario por id'

router.get('/consultUserByNames/:nombre', consultUserByNames) //ruta "consulta por nombre"

router.post('/saveUsers', saveUsers);      //creo ruta 'registrar usuarios'

router.put('/updateUser',   updateUser);     //creo ruta 'actualizar usuarios'

router.delete('/deleteUser/:id',  deleteUser);


export default router;      //exportar ruta