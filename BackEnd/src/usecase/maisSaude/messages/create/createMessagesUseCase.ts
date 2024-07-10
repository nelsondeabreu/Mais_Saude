import { IMessageDTO, IMessagesRepository } from "../../../../repositories/maisSaude/IMessagesRepository";



export class CreateMessagesUseCase {

  constructor(private messagesRepository:IMessagesRepository){}

   execute (data:IMessageDTO){
    return this.messagesRepository.create(data)
  }
}