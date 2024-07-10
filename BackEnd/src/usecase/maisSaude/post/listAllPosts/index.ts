import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";
import { ListAllPostsController } from "./listAllPostsController";
import { ListAllPostsUseCase } from "./listAllPostsUseCase";




const postRepository = new PostRepository()
const listAllPostsUseCase = new ListAllPostsUseCase(postRepository)
const listAllPostsController = new ListAllPostsController(listAllPostsUseCase)

export {listAllPostsController};