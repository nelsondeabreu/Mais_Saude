import { MessegesRepository } from "../../../../repositories/maisSaude/Implements/MessegesRepository";
import { EditMessageController } from "./editMessageController";
import { EditMessageUseCase } from "./editMessageUseCase";


const messagesRepository = new MessegesRepository()
const editMessageUseCase = new EditMessageUseCase(messagesRepository)
export const editMessageController = new EditMessageController(editMessageUseCase)