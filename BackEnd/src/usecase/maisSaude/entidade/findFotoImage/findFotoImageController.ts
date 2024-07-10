import { Request,Response } from "express"; 
import path from "path";


export class FindFotoImageController{

  async handle(request:Request,response:Response){
    try{
      const {foto} = request.params
      return response.sendFile(path.resolve(`uploads/${foto}`))
    }catch(error){
      return response.status(400).json({message:"Erro na busca da foto", error})
    }
  }
}