import { Request,Response } from "express"; 
import path from "path";

export class FindPostVideoController{

  async handle(request:Request,response:Response){
    try{
      const {video} = request.params
      return response.sendFile(path.resolve(`uploads/${video}`))
    }catch(error){
      return response.status(400).json({message:"Erro na busca da foto", error})
    }
  }
}