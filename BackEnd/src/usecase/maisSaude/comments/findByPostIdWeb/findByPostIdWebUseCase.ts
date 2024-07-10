import { ICommentsRepository } from "../../../../repositories/maisSaude/ICommentsRepository";



export class FindByPostIdWebUseCase{

  constructor(private commentsRepository:ICommentsRepository ){}

  execute(postID:string){
    return this.commentsRepository.findByPostID(postID)

  }
}