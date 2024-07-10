import { Request,Response } from "express";
import path from "path";
export class FindImageURLController{

  handle(request:Request,response:Response){
      try{
        const {fileName} = request.params
        return response.sendFile(path.resolve(`uploads/${fileName}`))
      }catch(error){
        return response.status(400).json({message:"Erro ao buscar imagem", error})
      }
  }
}