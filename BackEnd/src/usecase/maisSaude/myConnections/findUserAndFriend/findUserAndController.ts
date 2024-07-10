import { IMyConnectionsDTO } from "../../../../repositories/maisSaude/IMyConnectionsRepository";
import { FindUserAndFriendUseCase } from "./findUserAndFriendUseCase";
import { Request,Response } from "express";


export class FindUserAndController {

  constructor(private findUserAndFriendUseCase:FindUserAndFriendUseCase){}

  async handle(request:Request,response:Response){
    try{
      const found = await this.findUserAndFriendUseCase.execute(request.body)
      return response.status(200).json(found)
    }catch(error){
      return response.status(404).json({message:"Erro ao encontrar os dois",error}); 
    }
  }
}