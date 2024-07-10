import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";
import { ListPostsUserController } from "./listPostsUserController";
import { ListPostsUserUseCase } from "./listPostsUserUseCase";


const postRepository = new PostRepository()
const listPostsUserUseCase = new ListPostsUserUseCase(postRepository)
export const listPostsUserController = new ListPostsUserController(listPostsUserUseCase)