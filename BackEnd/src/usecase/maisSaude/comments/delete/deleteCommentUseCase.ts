import { CommentsRepository } from "../../../../repositories/maisSaude/Implements/CommentsRepository";



export class DeleteCommentUseCase{

  constructor(private commentRepository:CommentsRepository){}

  execute(id:string){
    return this.commentRepository.delete(id)
  }
}