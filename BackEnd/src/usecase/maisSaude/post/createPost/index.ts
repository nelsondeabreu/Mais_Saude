import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";
import { CreatePostUseCase } from "./createPostUseCase";
import { CreatePostController } from "./createPostController";





const postRepository = new PostRepository()
const createPostUseCase = new CreatePostUseCase(postRepository)
const createPostController = new CreatePostController(createPostUseCase)

export {createPostController}