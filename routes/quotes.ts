
import { Router } from 'express';

import { saveQuote, consultQuoteById, consultQuote, updateQuote, deleteQuote } from '../controllers/quote';

import { validateSaveQuote, validateUpdateQuote } from '../validators/quotes';


import validateJWT from '../helpers/validate-jwt';


const router = Router();       

router.post('/saveQuote', validateJWT, validateSaveQuote, saveQuote); 
router.get('/consultQuote', validateJWT, consultQuote);
router.get('/consultQuote/:id', validateJWT, consultQuoteById);
router.put('/updateQuote', validateJWT, validateUpdateQuote, updateQuote);
router.delete('/deleteQuote/:id', validateJWT, deleteQuote);




export default router;      //exportar ruta