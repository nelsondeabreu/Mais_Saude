import { CommentsRepository } from "../../../../repositories/maisSaude/Implements/CommentsRepository";
import { CountWebCommentsController } from "./countWebCommentsController";
import { CountWebCommentsUseCase } from "./countWebCommentsUseCase";



const commentsRepository = new CommentsRepository()
const countWebCommentsUseCase = new CountWebCommentsUseCase(commentsRepository)
export const countWebCommentsController = new CountWebCommentsController(countWebCommentsUseCase)