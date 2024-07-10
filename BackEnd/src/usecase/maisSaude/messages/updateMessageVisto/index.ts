import { MessegesRepository } from "../../../../repositories/maisSaude/Implements/MessegesRepository";
import { UpdateMessageVistoController } from "./updateMessageVistoController";
import { UpdateMessageVistoUseCase } from "./updateMessageVistoUseCase";




const messagesRepository = new MessegesRepository()
const updateMessageVistoUseCase = new UpdateMessageVistoUseCase(messagesRepository)
export const updateMessageVistoController = new UpdateMessageVistoController(updateMessageVistoUseCase)