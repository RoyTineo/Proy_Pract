import { Request, Response } from "express";
import connection from "../db/connection";

export const getUnidadesEjecutoras =(req: Request,res: Response) =>{
    connection.query("SELECT * FROM tb_unidad_ejecutora", (err, data) => {
      if (err) throw err;
      res.json(data)
    });

}

export const getUnidadEjecutora =(req: Request,res: Response) =>{
    
    const {id} = req.params
    connection.query(
      "SELECT * FROM tb_unidad_ejecutora WHERE id_unidad_ejecutora = ?", id,
      (err, data) => {
        if (err) throw err;
        res.json(data[0]);
        
        
      }
    );
  

}
export const deleteUnidadEjecutora =(req: Request,res: Response) =>{
    
    const {id} = req.params
    
    connection.query(
      "DELETE FROM tb_unidad_ejecutora WHERE id_unidad_ejecutora = ?",
      id,
      (err, data) => {
        if (err) throw err;
        res.json({
            msg: 'Unidad eliminada con exito'
        });
      }
    );

}
export const postUnidadEjecutora =(req: Request,res: Response) =>{
    
    const {body} = req
    
   connection.query(
     "INSERT INTO tb_unidad_ejecutora SET ?",[body],
     (err, data) => {
       if (err) throw err;
       res.json({
         msg: "Unidad agregada con exito",
       });
     }
   );
}
export const putUnidadEjecutora =(req: Request,res: Response) =>{
    
    const {body} = req;
    const { id } = req.params;
    connection.query("UPDATE tb_unidad_ejecutora SET ? WHERE id_unidad_ejecutora = ?",[body,id],(err,data)=>{
        if (err) throw err;
        res.json({
          msg: "Unidad actualizada con exito",
        });
    })

    
}