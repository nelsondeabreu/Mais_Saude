import { CommentsRepository } from "../../../../repositories/maisSaude/Implements/CommentsRepository";
import { CountCommentsController } from "./countCommentsController";
import { CountCommentsUseCase } from "./countCommentsUseCase";



const commentsRepository = new CommentsRepository()
const countCommentsUseCase = new CountCommentsUseCase(commentsRepository)
export const countCommentsController = new CountCommentsController(countCommentsUseCase)