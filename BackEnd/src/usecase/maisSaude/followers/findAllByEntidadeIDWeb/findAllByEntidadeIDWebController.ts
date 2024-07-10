import { FindAllByEntidadeIDUseCase } from "./findAllByEntidadeIDUseCase";
import { Request,Response } from "express";


export class FindAllByEntidadeIDWebController{

  constructor(private findAllByEntidadeIDUseCase:FindAllByEntidadeIDUseCase){}

  async handle(request:Request,response:Response){
    try{
      const found = await this.findAllByEntidadeIDUseCase.execute(request.body.entidadeID)
      return response.status(200).json(found)
    }catch(error){
      return response.status(400).json({message:"erro na busca de seguidores",error});
    }
  }
}