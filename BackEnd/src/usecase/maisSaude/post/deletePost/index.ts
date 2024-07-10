import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";
import { DeletePostController } from "./deletePostController";
import { DeletePostUseCase } from "./deletePostUseCase";





const postRepository = new PostRepository()
const deletePostUseCASE = new DeletePostUseCase(postRepository)
export const deletePostController = new DeletePostController(deletePostUseCASE)