import { CountNotificationUseCase } from "./countNotificationUseCase";
import { Request,Response } from "express";

export class CountNotificationWebController {

  constructor(private countNotificationUseCase:CountNotificationUseCase){}

  async handle(request:Request,response:Response){
    try{
      const req = await this.countNotificationUseCase.execute(request.body.destinatarioID)
      return response.status(200).json(req)
    }catch(error){
      return response.status(400).json({message:"Erro na contagem das notificacoes",error})
    }
  }
}