import { CommentsRepository } from "../../../../repositories/maisSaude/Implements/CommentsRepository";
import { EditCommentController } from "./editCommentController";
import { EditCommentUseCase } from "./editCommentUseCase";

const commentRepository = new CommentsRepository()
const editCommentUseCase = new EditCommentUseCase(commentRepository)
export const editCommentController = new EditCommentController(editCommentUseCase)
