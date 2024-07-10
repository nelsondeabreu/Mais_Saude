import { CommentsRepository } from "../../../../repositories/maisSaude/Implements/CommentsRepository";
import { CreateCommentsController } from "./createCommentsController";
import { CreateCommentsUseCase } from "./createCommentsUseCase";



const commentsRepository = new CommentsRepository()
const createCommentsUseCase = new CreateCommentsUseCase(commentsRepository)
export const createCommentsController = new CreateCommentsController(createCommentsUseCase)