import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";




export class DeletePostUseCase {
  constructor(private postRepository: PostRepository){}

  async execute(postID: string) {
    const deletePost = await this.postRepository.deletePost(postID)
  }
}