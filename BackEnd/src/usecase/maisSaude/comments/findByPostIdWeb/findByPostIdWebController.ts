import { FindByPostIdWebUseCase } from "./findByPostIdWebUseCase";
import { Request,Response } from "express";


export class FindByPostIdWebController{

  constructor(private findByPostIdWebUseCase: FindByPostIdWebUseCase){}

  async handle(request:Request,response:Response){
    try{
      const found = await this.findByPostIdWebUseCase.execute(request.body.postId)
      return response.status(200).json(found)
    }catch(error){
      return response.status(400).json({message:"Erro ao achar comentarios", error})
    }
  }
}