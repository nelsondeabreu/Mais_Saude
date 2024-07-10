import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";
import { EditPostController } from "./editPostController";
import { EditPostUseCase } from "./editPostUseCase";




const postRepository = new PostRepository()
const editPostUseCase = new EditPostUseCase(postRepository)
export const editPostController =  new EditPostController(editPostUseCase)