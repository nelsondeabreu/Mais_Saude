import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";


export class EditPostUseCase{

  constructor(private postRepository:PostRepository){}

  execute(id:string,conteudo:string){
    return this.postRepository.edit(id,conteudo)
  }
}