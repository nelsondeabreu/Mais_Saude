import { CountUseCase } from "./countUseCase";
import { Request,Response } from "express";

export class CountController{

  constructor(private countUseCase:CountUseCase){}

  async handle(request:Request,response:Response){
    try{
      const count = await this.countUseCase.execute(request.body.postID)
      return response.status(200).json(count)
    }catch(error){
      return response.status(400).json({message:"Erro ao contar as reacoes", error});
    }
  }
}