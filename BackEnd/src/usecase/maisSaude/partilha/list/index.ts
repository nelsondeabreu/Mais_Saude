import { ShareRepository } from "../../../../repositories/maisSaude/Implements/IShareRepository";
import { ListShareController } from "./listShareController";
import { ListShareUseCase } from "./listShareUseCase";


const shareRepository = new ShareRepository()
const listShareUseCase = new ListShareUseCase(shareRepository)
export const listShareController = new ListShareController(listShareUseCase)