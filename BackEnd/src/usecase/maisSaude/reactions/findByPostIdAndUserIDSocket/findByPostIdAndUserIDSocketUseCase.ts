import { ReactionsRepository } from "../../../../repositories/maisSaude/Implements/ReactionsRepository";



export class FindByPostIdAndUserIDSocketUseCase{

  constructor(private reacoesRepository:ReactionsRepository){}

  execute(postID:string,userID:string){
    return this.reacoesRepository.findByPostIDAndUserID(postID,userID)
  }
}