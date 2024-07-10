import { MessegesRepository } from "../../../../repositories/maisSaude/Implements/MessegesRepository";



export class EditMessageUseCase{
  constructor(private messegesRepository:MessegesRepository){}

  execute(id:string,conteudo:string){
    return this.messegesRepository.editMessage(id,conteudo)
  }
}