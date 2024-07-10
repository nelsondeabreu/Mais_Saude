import { MessegesRepository } from "../../../../repositories/maisSaude/Implements/MessegesRepository";
import { FindMessageByEmissorIDController } from "./findByEmissorController";
import { FindMessageByEmissorIDUseCase } from "./findByEmissorIDUseCase";





const messagesRepository = new MessegesRepository();
const findByEmissorIDUseCase = new FindMessageByEmissorIDUseCase(messagesRepository)
export const findMessageByEmissorIDController = new FindMessageByEmissorIDController(findByEmissorIDUseCase)