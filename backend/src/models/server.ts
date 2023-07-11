import express from "express";
import routesUnidadEjecutora from "../routes/unidad_ejecutora.routes"
import connection from "../db/connection";
import cors  from "cors";

class Server {
  private app: express.Application;
  private port: string;

  constructor() {
    this.app=express();
    this.port = process.env.PORT || '3000';
    this.middlewares()
    this.routes()
    this.connectarDB()
  }

  listen(){
    this.app.listen(this.port,()=>{
        console.log('Aplicacion corriendo en el puerto', this.port);
        
    })
  }
  middlewares(){
      //parseo del body
      this.app.use(express.json())


      //cors
      this.app.use(cors())

  }
  routes(){
      this.app.use("/api/unidad_ejecutora", routesUnidadEjecutora);
      
    }
    connectarDB(){
        connection.connect((err)=>{
            if (err) throw err;
            console.log('Conectado a la base de datos');
        })

    }
}

export default Server;
