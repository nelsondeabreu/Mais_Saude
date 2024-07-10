import { MessegesRepository } from "../../../../repositories/maisSaude/Implements/MessegesRepository";
import { DeleteMessagesController } from "./deleteMessageController";
import { DeleteMessagesUseCase } from "./deleteMessageUseCase";



const messagesRepository = new MessegesRepository();
const deleteMessageUseCase = new DeleteMessagesUseCase(messagesRepository)
export const deleteMessagesController = new DeleteMessagesController(deleteMessageUseCase)