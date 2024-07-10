import { IMessagesRepository } from "../../../../repositories/maisSaude/IMessagesRepository";


export class CountMessagesUseCase{

  constructor(private mensagensRepository:IMessagesRepository){}

  execute(emissorID:string,receptorID:string){
    return this.mensagensRepository.countMessages(emissorID,receptorID)
  }
}