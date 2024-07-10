import { ReactionsRepository } from "../../../../repositories/maisSaude/Implements/ReactionsRepository";
import { DeleteReactionController } from "./deleteReactionController";
import { DeleteReactionUseCase } from "./deleteReactionUseCase";





const reactionsRepository = new ReactionsRepository()
const deleteReactionUseCase = new DeleteReactionUseCase(reactionsRepository)
export const deleteReactionController = new DeleteReactionController(deleteReactionUseCase)