import { Request, Response }  from "express";
import { connection }         from "../data/connection"

export const getAllUsers = async(
   req: Request,
   res: Response
   ): Promise<void> =>{
      try {
         const nome:    any   = req.query.name || '%'
         const tipo:    any   = req.query.type || '%'
         const sort:    any   = req.query.sort || 'email'
         const order:   any   = req.query.order|| 'ASC'
         const limit:   any   = req.query.limit|| 10
         const page:    any   = req.query.page || 1
         const offset = (Number(page) - 1 )*10


         const users = await connection.raw(`
         SELECT id, name, email, type
         FROM aula49_exercicio
         WHERE name LIKE '%${nome}%'
         AND   type LIKE '%${tipo}%'
         ORDER BY ${sort} ${order}
         LIMIT ${limit} OFFSET ${offset};
         `)

         if(!users.length){
            res.statusCode = 404
            throw new Error("No users found")
         }

         res.status(200).send(users[0])
         
      } catch (error) {
         console.log(error)
         res.send(error.message || error.sqlMessage)
      }
}

