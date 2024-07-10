import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";
import { BlockedController } from "./blockedController";
import { BlockedUseCase } from "./blockedUseCase";




const especialistaRepository = new EspecialistasRepository()
const blockedUseCase = new BlockedUseCase(especialistaRepository)
export const blockedController = new BlockedController(blockedUseCase)