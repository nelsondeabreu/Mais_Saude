import { MessegesRepository } from "../../../../repositories/maisSaude/Implements/MessegesRepository";
import { CountMessagesWebController } from "./countMessagesWebController";
import { CountMessagesUseCase } from "./countMessagesWebUseCase";




const messagesRepository = new MessegesRepository()
const countMessagesUseCase = new CountMessagesUseCase(messagesRepository)
export const countMessagesWebController = new CountMessagesWebController(countMessagesUseCase)