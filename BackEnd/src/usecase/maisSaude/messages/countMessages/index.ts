import { MessegesRepository } from "../../../../repositories/maisSaude/Implements/MessegesRepository";
import { CountMessagesController } from "./countMessagesController";
import { CountMessagesUseCase } from "./countMessagesUseCase";




const messagesRepository = new MessegesRepository()
const countMessagesUseCase = new CountMessagesUseCase(messagesRepository)
export const countMessagesController = new CountMessagesController(countMessagesUseCase)