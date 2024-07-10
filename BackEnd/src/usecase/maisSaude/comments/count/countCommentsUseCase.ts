import { ICommentsDTO, ICommentsRepository } from "../../../../repositories/maisSaude/ICommentsRepository";


export class CountCommentsUseCase{
  
  constructor(private commentsRepository:ICommentsRepository){}

  execute(postId:string){
    return this.commentsRepository.count(postId)
  } 
}