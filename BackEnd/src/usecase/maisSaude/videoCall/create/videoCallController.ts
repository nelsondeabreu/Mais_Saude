import { CreateVideoCallUseCase } from "./videoCallUseCase";
import { Request,Response } from "express";


export class CreateVideoCallController {
  constructor(private createVideoCallUseCase:CreateVideoCallUseCase){}

  async handle(request:Request, response:Response){
    try{
      const create = await this.createVideoCallUseCase.execute(request.body)
      return response.status(200).json(create)
    }catch(error){
      return response.status(404).json({message:"Erro ao criar uma conferencia",error})
    }
  }
}