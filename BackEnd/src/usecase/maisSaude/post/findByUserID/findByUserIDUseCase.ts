import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";



export class FindByUserIDUseCase{

  constructor(private postRepository:PostRepository){}

  async execute(id:string){
    return this.postRepository.findByUserID(id)
  }
}