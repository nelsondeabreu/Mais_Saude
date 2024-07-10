import { CreateTimeNotificationUseCase } from "./createTempoNotificacaoUseCase";
import { Request,Response } from "express";


export class CreateTimeNotificationController{

  constructor(private createTimeNotificationUseCase: CreateTimeNotificationUseCase){}

  async handle(request:Request,response:Response){

    try{
      const res = await this.createTimeNotificationUseCase.execute(request.body)
      return response.status(200).json(res)
    }catch(error){
      return response.status(404).json({
        message:"Erro ao criar tmepo de notificacao",
        error
      })
    }
  }
}