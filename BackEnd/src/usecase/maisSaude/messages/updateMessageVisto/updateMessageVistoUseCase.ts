import { MessegesRepository } from "../../../../repositories/maisSaude/Implements/MessegesRepository";


export class UpdateMessageVistoUseCase{
  constructor(private messegesRepository:MessegesRepository){}

  execute(emissorID:string,receptorID:string) {
    return this.messegesRepository.updateMessageVisto(receptorID,emissorID)
  }
}