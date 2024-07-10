import { FindByUserIDUseCase } from "./findByUserIDUseCase";
import { Request,Response } from "express";


export class FindByUserIDController {

  constructor(private findByUserIDUseCase:FindByUserIDUseCase){}

  async hanlde(request:Request,response:Response){
    try{
      const notifcation = await this.findByUserIDUseCase.handle(request.body.userID)
      return response.status(200).json(notifcation)
    }catch(Error){
      return response.status(404).json({message:"Erro ao achar notificações do usuario", Error});
    }
  }
}