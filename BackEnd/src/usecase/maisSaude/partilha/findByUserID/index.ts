import { ShareRepository } from "../../../../repositories/maisSaude/Implements/IShareRepository";
import { FindByUserIDController } from "./findByUserIDController";
import { FindByUserIDUseCase } from "./findByUserIDUseCase";



const shareRepository = new ShareRepository()
const findByUserIDUseCase = new FindByUserIDUseCase(shareRepository)
export const findByUserIDController = new FindByUserIDController(findByUserIDUseCase)