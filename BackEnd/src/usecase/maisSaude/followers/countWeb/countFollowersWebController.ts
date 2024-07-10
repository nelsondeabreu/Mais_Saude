import { CountFollowersUseCase } from "./countFollowersUseCase";
import { Request,Response } from "express";

export class CountFollowersWebController{

  constructor(private countFollowersUseCase: CountFollowersUseCase){}

  async handle(request:Request,response:Response){
    try{
      const found = await this.countFollowersUseCase.execute(request.body.entidadeID)
      return response.status(200).json(found)
    }catch(error){
      return response.status(400).json({message:"Erro ao contar seguidores",error});
    }
  }
}