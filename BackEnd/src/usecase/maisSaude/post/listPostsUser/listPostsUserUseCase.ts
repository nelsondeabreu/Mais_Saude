import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";



export class ListPostsUserUseCase{
  constructor(private postRepository:PostRepository){}

  async execute(userID:string){
    return this.postRepository.listPostsUser(userID)
  }
}