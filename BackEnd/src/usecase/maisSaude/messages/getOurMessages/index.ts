import { MessegesRepository } from "../../../../repositories/maisSaude/Implements/MessegesRepository";
import { GetOurMessagesController } from "./getOurMessagesController";
import { GetOurMessagesUseCase } from "./getOurMessagesUseCase";




const messagesRepository = new MessegesRepository();
const getOurMessagesUseCase = new GetOurMessagesUseCase(messagesRepository)
export const getOurMessagesController =  new GetOurMessagesController(getOurMessagesUseCase)