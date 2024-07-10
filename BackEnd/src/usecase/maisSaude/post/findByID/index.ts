import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";
import { FindByIDController } from "./findByIDController";
import { FindByIDUseCase } from "./findByIDUseCase";


const postRepository =  new PostRepository()
const findByIDUseCase = new FindByIDUseCase(postRepository)
export const findByIDController = new FindByIDController(findByIDUseCase)