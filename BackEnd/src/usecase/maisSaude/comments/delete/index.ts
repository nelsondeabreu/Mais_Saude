import { CommentsRepository } from "../../../../repositories/maisSaude/Implements/CommentsRepository";
import { DeleteCommentController } from "./deleteCommentController";
import { DeleteCommentUseCase } from "./deleteCommentUseCase";



const commentRepository = new CommentsRepository()
const deleteCommentUseCase = new DeleteCommentUseCase(commentRepository)
export const deleteCommentController = new DeleteCommentController(deleteCommentUseCase)