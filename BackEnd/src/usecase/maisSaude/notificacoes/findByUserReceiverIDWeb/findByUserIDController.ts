import { INotificationDTO } from "../../../../repositories/maisSaude/INotificationsRepository";
import { FindByUserReceiverIDUseCase } from "./findByUserIDUseCase";
import { Request,Response } from "express";

export class FindByUserAndReceiverIDWebController {

  constructor(private findByUserReceiverIDUseCase:FindByUserReceiverIDUseCase){}

   async hanlde(request:Request,response:Response){
    try{
      console.log(request.body.usuarioID,request.body.destinatarioID,request.body.tipo,"ssdxcdc");
      
      const req = await this.findByUserReceiverIDUseCase.handle(request.body)
      
      return response.status(200).json(req)
    }catch(Error){
      return response.status(400).json({message:"Erro ao achar notificações do usuario", Error});
    }
  }
}