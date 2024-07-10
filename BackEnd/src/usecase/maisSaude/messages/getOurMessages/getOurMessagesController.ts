import { GetOurMessagesUseCase } from "./getOurMessagesUseCase";
import { Request,Response } from "express";


export class GetOurMessagesController{

  constructor(private getMessagesByEmissorIDAndReceptorUseCase: GetOurMessagesUseCase){}

    handle(emissorID:string,receptorID:string){
    try{
      return this.getMessagesByEmissorIDAndReceptorUseCase.execute(emissorID,receptorID)
    }catch(Error){
      return console.error({message:"Erro ao buscar as mensagens",Error})
    }
  }
}