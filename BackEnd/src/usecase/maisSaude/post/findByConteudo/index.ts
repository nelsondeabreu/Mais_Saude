import { PostRepository } from "../../../../repositories/maisSaude/Implements/PostRepository";
import { FindByConteudoController } from "./findByConteudoController";
import { FindByConteudoUseCase } from "./findByConteudoUseCase";


const postRepository =  new PostRepository()
const findByConteudoUseCase = new FindByConteudoUseCase(postRepository)
export const findByConteudoController = new FindByConteudoController(findByConteudoUseCase)