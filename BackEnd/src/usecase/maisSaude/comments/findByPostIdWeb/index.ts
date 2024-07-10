import { CommentsRepository } from "../../../../repositories/maisSaude/Implements/CommentsRepository";
import { FindByPostIdWebController } from "./findByPostIdWebController";
import { FindByPostIdWebUseCase } from "./findByPostIdWebUseCase";


const commentsRepository = new CommentsRepository()
const findByPostIdWebUseCase = new FindByPostIdWebUseCase(commentsRepository)
export const findByPostIdWebController = new FindByPostIdWebController(findByPostIdWebUseCase)