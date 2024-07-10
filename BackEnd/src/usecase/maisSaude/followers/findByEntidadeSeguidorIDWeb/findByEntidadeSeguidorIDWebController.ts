import { FindByEntidadeSeguidorIDWebUseCase } from "./findByEntidadeSeguidorIDWebUseCase";
import { Request,Response } from "express";

export class FindByEntidadeSeguidorIDWebController{

  constructor(private findByEntidadeSeguidorIDWebUseCase:FindByEntidadeSeguidorIDWebUseCase){}

  async handle(request:Request,response:Response){
    try{
      const found = await this.findByEntidadeSeguidorIDWebUseCase.execute(request.body.entidadeID,request.body.seguidorID)
      return response.status(200).json(found)
    }catch(error){
      return response.status(400).json({message:"erro na busca de seguidores",error});
    }
  }
}