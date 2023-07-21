//importar el express y se debe declarar la Application para usarla con express
import express, { Application } from "express";
import cors from 'cors';
//importamos el archivo connection de la base de datos
import db from '../db/connection';
//importamos el router del archivo users.ts routes y le podemos cambiar el nombre ya que se exporto con default
import userRouter from "../routes/users";
import authRouter from "../routes/auth";
import productRouter from "../routes/products";
import customerRouter from "../routes/customers";
import quoteRouter from "../routes/quotes";


//declarar variables
class Server{                           
    private app: Application;           //declaro variable
    private port: string | undefined;   //declaro variable para el puerto
    private apiPaths = {                //declaro variable para las rutas
      auth: '/api/auth',
      users: '/api/users',
      products: '/api/products',
      customers: '/api/customers',
      quotes: '/api/quotes'
      
        
    }
  

  //ejecutar metodos
  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.dbconnection();
    this.middlewares();
    this.routes();

  }

  async dbconnection() {                        //funcion para la base de datos, ponemos un try-catch para capturar los errores
        try {
            await db.authenticate               //autentica la base de datos
            console.log('database online');     //se ejecuta si la bd esta en linea
        } catch (error) {                       //captura los errores que se presenten en la bd
            console.log(error);            
        }
    };

  //lectura y parcheo del body
    middlewares() {
      this.app.use(express.json());
      this.app.use(cors());           	//permite peticiones desde cualquier  servidor
        
		
    };

  //funcion para las rutas
    routes() {
      this.app.use(this.apiPaths.users, userRouter);
      this.app.use(this.apiPaths.products, productRouter);
      this.app.use(this.apiPaths.customers, customerRouter);
      this.app.use(this.apiPaths.auth, authRouter);
      this.app.use(this.apiPaths.quotes, quoteRouter );
    }

  //puerto
  listen(){
    this.app.listen(this.port, () => {
        console.log(`Se esta ejecutando en el puerto: ${this.port}`);
    })
  }
}



//erxporto la clase
export default Server;
