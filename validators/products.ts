import { Request, Response, NextFunction } from 'express';
import { body, check, validationResult } from 'express-validator';


//VALIDACION REGISTRAR PRODUCTOS
export const validateSaveProducts = [
  check('nombre')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del producto')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    
    check('caracteristicas')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese un producto'),
        
    
    check('valorUnitario')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el precio del producto'),
        
        
    check('correo')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el Correo electronico de quien realiza el registro del producto'),
      
 
     
        
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]

//VALIDACION ACTUALIZAR PRODUCTOS
export const validateUpdateProducts = [
  
    check('id')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del producto'),
  
    check('caracteristicas')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese la caracteristica del producto'),
        
    
    check('valorUnitario')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el precio del producto'),
        
        
   
 
     
        
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]