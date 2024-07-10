import { CommentsRepository } from "../../../../repositories/maisSaude/Implements/CommentsRepository";
import { FindByPostIdSocketController } from "./findByPostIdSocketController";
import { FindByPostIdSocketUseCase } from "./findByPostIdSocketUseCase";


const commentsRepository = new CommentsRepository()
const findByPostIdSocketUseCase = new FindByPostIdSocketUseCase(commentsRepository)
export const findByPostIdSocketController = new FindByPostIdSocketController(findByPostIdSocketUseCase)