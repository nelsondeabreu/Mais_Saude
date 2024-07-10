import { ICommentsRepository } from "../../../../repositories/maisSaude/ICommentsRepository";



export class FindByPostIdSocketUseCase{

  constructor(private commentsRepository:ICommentsRepository ){}

  execute(postID:string){
    return this.commentsRepository.findByPostID(postID)
  }
}