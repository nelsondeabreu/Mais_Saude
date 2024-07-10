import { ICommentsDTO, ICommentsRepository } from "../../../../repositories/maisSaude/ICommentsRepository";


export class CreateCommentsUseCase{
  
  constructor(private commentsRepository:ICommentsRepository){}

  execute(data:ICommentsDTO){
    return this.commentsRepository.create(data)
  } 
}