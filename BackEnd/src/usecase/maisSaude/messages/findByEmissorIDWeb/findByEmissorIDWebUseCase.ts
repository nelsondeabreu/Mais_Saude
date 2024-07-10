import { IMessagesRepository } from "../../../../repositories/maisSaude/IMessagesRepository";

export class FindMessageByEmissorWebIDUseCase{

  constructor(private messagesRepository:IMessagesRepository){}

  async execute(emissorID:string){
    return this.messagesRepository.findByEmissorID(emissorID)
  }
  
}