import { IDeleteMessage } from "../../../../repositories/maisSaude/IMessagesRepository";
import { DeleteMessagesUseCase } from "./deleteMessageUseCase";
import { Request,Response } from "express";

export class DeleteMessagesController {

  constructor(private deleteMessageUseCase: DeleteMessagesUseCase){}

  async handle(data:IDeleteMessage){
    try{  
      const messageDeleted = await this.deleteMessageUseCase.execute(data)
      return messageDeleted
    }catch(error){
      return console.error({message:"Erro ao deletar mensagem",error})
    }
  }
}