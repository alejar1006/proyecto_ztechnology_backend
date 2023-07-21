import { Request, Response, NextFunction } from 'express';
import { body, check, validationResult } from 'express-validator';



//VALIDACION REGISTRAR CLIENTES
export const validateSaveCustomers = [
  check('nombres')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del cliente')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    
    check('apellidos')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el apellido del cliente')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
        
    
        
    check('correo')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el Correo electronico del cliente ')
        .isEmail().withMessage('Ingresa un formato de correo valido '),
        
    
        
    check('telefono')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el numero telefonico del cliente ')
        .isNumeric().withMessage('El telefono debe ser numerico '),
      
    
    check('direccion')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa la direccion del cliente '),
       
      
      
    check('creadoPorIdUsuarios')
        .exists()
        .not()
        .isEmpty().withMessage('Se requiere el Id de quien se encuentra realizando el registro')
        .isNumeric().withMessage('El valor debe ser numerico '),
      
     
        
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]

//VALIDACION ACTUALIZAR CLIENTES
export const validateUpdateCustomers = [
  check('nombres')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del cliente')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    
    check('apellidos')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el apellido del cliente')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
        
    
        
    check('correo')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el Correo electronico del cliente ')
        .isEmail().withMessage('Ingresa un formato de correo valido '),
        
    
        
    check('telefono')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el numero telefonico del cliente ')
        .isNumeric().withMessage('El telefono debe ser numerico '),
      
    
    check('direccion')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa la direccion del cliente '),
       
      
      
        
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]