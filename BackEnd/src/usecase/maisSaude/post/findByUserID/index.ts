import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";
import { FindByUserIDController } from "./findByUserIDController";
import { FindByUserIDUseCase } from "./findByUserIDUseCase";


const postRepository =  new PostRepository()
const findByUserIDUseCase = new FindByUserIDUseCase(postRepository)
export const findByUserIDController = new FindByUserIDController(findByUserIDUseCase)