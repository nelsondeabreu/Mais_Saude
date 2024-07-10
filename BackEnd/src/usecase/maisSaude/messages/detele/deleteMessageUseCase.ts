import { IDeleteMessage, IMessagesRepository } from "../../../../repositories/maisSaude/IMessagesRepository";



export class DeleteMessagesUseCase {

  constructor(private messagesRepository:IMessagesRepository){}

  async execute(data:IDeleteMessage){
    return this.messagesRepository.delete(data)
  }
}