import { ReactionsRepository } from "../../../../repositories/maisSaude/Implements/ReactionsRepository";


export class CountUseCase{

  constructor(private reationRepository:ReactionsRepository){}

  execute(postID:string){
    return this.reationRepository.findByPostID(postID)
  }
}