import { ICommentsDTO, ICommentsRepository } from "../../../../repositories/maisSaude/ICommentsRepository";


export class CountWebCommentsUseCase{
  
  constructor(private commentsRepository:ICommentsRepository){}

  execute(postId:string){
    return this.commentsRepository.count(postId)
  } 
}