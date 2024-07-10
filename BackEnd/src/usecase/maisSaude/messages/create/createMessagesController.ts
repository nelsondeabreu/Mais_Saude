import { IMessageDTO } from "../../../../repositories/maisSaude/IMessagesRepository";
import { CreateMessagesUseCase } from "./createMessagesUseCase";

export class CreateMessagesController{

  constructor(private createMessagesUseCase:CreateMessagesUseCase){}

   handle(data:IMessageDTO){
    try{
      if(data.conteudo){
        return this.createMessagesUseCase.execute(data)
      }
    }catch(erro){
      return console.error({message:"Erro ao mandar mensagem",erro});
    }
  }
}