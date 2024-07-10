import { MessegesRepository } from "../../../../repositories/maisSaude/Implements/MessegesRepository";
import { GetMessagesByEmissorIDAndReceptorController } from "./getMessagesByEmissorIDAndReceptorController";
import { GetMessagesByEmissorIDAndReceptorUseCase } from "./getMessagesByEmissorIDAndReceptorUseCase";




const messagesRepository = new MessegesRepository();
const getMessagesByEmissorIDAndReceptorUseCase = new GetMessagesByEmissorIDAndReceptorUseCase(messagesRepository)
export const getMessagesByEmissorIDAndReceptorController =  new GetMessagesByEmissorIDAndReceptorController(getMessagesByEmissorIDAndReceptorUseCase)