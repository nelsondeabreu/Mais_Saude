import { CommentsRepository } from "../../../../repositories/maisSaude/Implements/CommentsRepository";




export class EditCommentUseCase{

  constructor(private commentRepository:CommentsRepository){}

  execute(id:string,conteudo:string){
    return this.commentRepository.edit(id,conteudo)
  }
}