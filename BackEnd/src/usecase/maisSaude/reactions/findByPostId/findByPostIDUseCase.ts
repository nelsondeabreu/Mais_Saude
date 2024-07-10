import { ReactionsRepository } from "../../../../repositories/maisSaude/Implements/ReactionsRepository";



export class FindByPostIDUseCase{

  constructor(private reacoesRepository:ReactionsRepository){}

  execute(postID:string){
    return this.reacoesRepository.findByPostID(postID)
  }
}