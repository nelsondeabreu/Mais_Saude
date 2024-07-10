import { MessegesRepository } from "../../../../repositories/maisSaude/Implements/MessegesRepository";
import { CreateMessagesController } from "./createMessagesController";
import { CreateMessagesUseCase } from "./createMessagesUseCase";




const messagesRepository = new MessegesRepository();
const createMessagesUseCase =  new CreateMessagesUseCase(messagesRepository);
export const createMessagesWebController = new CreateMessagesController(createMessagesUseCase);