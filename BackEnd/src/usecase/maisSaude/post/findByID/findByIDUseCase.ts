import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";


export class FindByIDUseCase{

  constructor(private postRepository:PostRepository){}

  async execute(id:string){
    return this.postRepository.findByID(id)
  }
}