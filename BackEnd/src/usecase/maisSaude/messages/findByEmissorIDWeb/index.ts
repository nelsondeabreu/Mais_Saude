import { MessegesRepository } from "../../../../repositories/maisSaude/Implements/MessegesRepository";
import { FindMessageByEmissorIDWebController } from "./findByEmissorWebController";
import { FindMessageByEmissorWebIDUseCase } from "./findByEmissorIDWebUseCase";


const messagesRepository = new MessegesRepository();
const findByEmissorIDUseCase = new FindMessageByEmissorWebIDUseCase(messagesRepository)
export const findMessageByEmissorIDWebController = new FindMessageByEmissorIDWebController(findByEmissorIDUseCase)