import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";


export class ListAllPostsUseCase {

  constructor(private postRepository: PostRepository){}

  async execute () {
    const allPosts = await this.postRepository.listAllPosts();
    return allPosts
  }

}