import { IMessagesRepository } from "../../../../repositories/maisSaude/IMessagesRepository";

export class FindMessageByEmissorIDUseCase{

  constructor(private messagesRepository:IMessagesRepository){}

  async execute(emissorID:string){
    return this.messagesRepository.findByEmissorID(emissorID)
  }
  
}