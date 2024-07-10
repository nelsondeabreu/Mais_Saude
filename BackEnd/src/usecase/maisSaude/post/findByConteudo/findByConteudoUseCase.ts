import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";



export class FindByConteudoUseCase{

  constructor(private postRepository:PostRepository){}

  async execute(conteudo:string){
    return this.postRepository.findByUserConteudo(conteudo)
  }
}