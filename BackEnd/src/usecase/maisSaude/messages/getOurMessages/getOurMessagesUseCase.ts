import { IMessageDTO, IMessagesRepository } from "../../../../repositories/maisSaude/IMessagesRepository";

export class GetOurMessagesUseCase{
  constructor(private messagesRepository:IMessagesRepository){}

  async execute(emissorID:string,receptorID:string){
    return this.messagesRepository.getMessegesByEmissorIDAndReceptorID(emissorID,receptorID)
  }
}