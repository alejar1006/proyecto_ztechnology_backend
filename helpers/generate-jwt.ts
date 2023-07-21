import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

//GENERADOR DE TOKEN
const generateJWT = (id = '') => {

    return new Promise((resolve, reject) => {
        const payload = { id };

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY || '', {
            expiresIn: '5m'     //tiempo que expira el token
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
          } else {
              resolve(token);
            }
        })

    });
}

export default generateJWT;