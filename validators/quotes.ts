import { Request, Response, NextFunction } from 'express';
import { body, check, validationResult } from 'express-validator';


export const validateSaveQuote = [
  check('detalle')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese los detalles de la cotizacion')
        .isLength({ min: 6 }).withMessage('Debe tener minimo 6 caracteres'),
    
    check('precio')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el valor total de la cotizacion')
        .isNumeric().withMessage('ingresar valor numerico'),
    
    check('idUsuario')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del usuario')
        .isNumeric().withMessage('ingresar valor numerico'),
        
        
    check('idCliente')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del cliente')
        .isNumeric().withMessage('ingresar valor numerico'),
        
      
   
        
        
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]

export const validateUpdateQuote = [
  check('id')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el ID de la cotizacion a modificar')
        .isNumeric().withMessage('ingresar valor numerico'),
      
  
  check('detalle')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese los detalles de la cotizacion')
        .isLength({ min: 6 }).withMessage('Debe tener minimo 6 caracteres'),
    
    check('precio')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el valor total de la cotizacion')
        .isNumeric().withMessage('ingresar valor numerico'),
    
    check('idUsuario')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del usuario')
        .isNumeric().withMessage('ingresar valor numerico'),
        
        
    check('idCliente')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del cliente')
        .isNumeric().withMessage('ingresar valor numerico'),
        
      
   
        
        
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]