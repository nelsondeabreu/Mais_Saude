import { ShareRepository } from "../../../../repositories/maisSaude/Implements/IShareRepository";
import { DeleteShareController } from "./deleteController";
import { DeleteShareUseCase } from "./deleteUseCase";


const shareRepository = new ShareRepository()
const deleteShareUseCase = new DeleteShareUseCase(shareRepository)
export const deleteShareController = new DeleteShareController(deleteShareUseCase)