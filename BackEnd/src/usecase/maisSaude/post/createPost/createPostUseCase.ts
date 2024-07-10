import { IPostDTO } from "../../../../repositories/maisSaude/IPostRepository";
import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";



export class CreatePostUseCase {

  constructor (private postRepository: PostRepository){}

  async execute (data: IPostDTO) {
     try {
      const newPost = await this.postRepository.create(data)
      return newPost;
     }
     catch (error) {
      return console.error("Erro ao criar um post!");   
     }
  }
}