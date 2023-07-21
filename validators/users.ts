import { Request, Response, NextFunction } from 'express';
import { body, check, validationResult } from 'express-validator';

//VALIDAR - CREAR USUARIO
export const validateSaveUser = [
  check('nombre')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del usuario')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    
    check('correo')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese un correo electronico')
        .isEmail().withMessage('ingresar formato de email correcto'),
    
    check('contraseña')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese una contraseña')
        .isLength({ min: 6 }).withMessage('La contraseña debe ser de minimo 6 caracteres'),
        
    check('estado')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor asigne un estado'),
      
    check('idRol')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor asigne un rol'),
        
    check('creadoPorRol')
        .exists()
        .not()
        .isEmpty().withMessage('por favor identique su rol')
        .isNumeric().withMessage('por favor ingrese su rol en valor numerico')
        .custom((value, { req }) => {
            if (value == 2) {
                throw new Error('Invalido, los gestores no tienen acceso a crear usuarios.')                
            } if (value < 1 ) {
                throw new Error('El rol no existe.')
            } if (value > 2 ) {
                throw new Error('El rol no existe.')
            } 
            return true
        }), 
        
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]

//VALIDAR - ACTUALIZAR USUARIO
export const validateUpdateUser = [
  check('id')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del usuario a modificar'),
        
    
  
  check('nombre')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del usuario a modificar')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    
    check('correo')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese un correo electronico a modificar')
        .isEmail().withMessage('ingresar formato de email correcto'),
    
    check('contraseña')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese una contraseña')
        .isLength({ min: 6 }).withMessage('La contraseña debe ser de minimo 6 caracteres'),
        
    check('estado')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor asigne un estado a modificar'),
      
    check('idRol')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor asigne un rol a modificar'),
        
    check('creadoPorRol')
        .exists()
        .not()
        .isEmpty().withMessage('por favor identique su rol')
        .isNumeric().withMessage('por favor ingrese su rol en valor numerico')
        .custom((value, { req }) => {
            if (value == 2) {
                throw new Error('Invalido, los gestores no tienen acceso a modificar usuarios.')                
            } if (value < 1 ) {
                throw new Error('El rol no existe.')
            } if (value > 2 ) {
                throw new Error('El rol no existe.')
            } 
            return true
        }), 
        
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]

//VALIDAR - ELIMINAR USUARIO
export const validateDeleteUser = [
  check('id')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del usuario a eliminar'),
        
  check('creadoPorRol')
        .exists()
        .not()
        .isEmpty().withMessage('por favor identique su rol')
        .isNumeric().withMessage('por favor ingrese su rol en valor numerico')
        .custom((value, { req }) => {
            if (value == 2) {
                throw new Error('Invalido, los gestores no tienen acceso a eliminar usuarios.')                
            } if (value < 1 ) {
                throw new Error('El rol no existe.')
            } if (value > 2 ) {
                throw new Error('El rol no existe.')
            } 
            return true
        }), 
        
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]