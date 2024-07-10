import { IMessageDTO, IMessagesRepository } from "../../../../repositories/maisSaude/IMessagesRepository";



export class GetMessagesByEmissorIDAndReceptorUseCase{
  constructor(private messagesRepository:IMessagesRepository){}

  async execute(emissorID:string,receptorID:string){
    return this.messagesRepository.getMessegesByEmissorIDAndReceptorID(emissorID,receptorID)
  }
}