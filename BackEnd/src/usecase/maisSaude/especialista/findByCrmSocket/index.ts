import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";
import { FindByCrmSocketController } from "./findByCrmSocketController";
import { FindByCrmUseCase } from "./findByCrmSocketUseCase";




const especialistaRepository = new EspecialistasRepository();
const findByCrmUseCase = new FindByCrmUseCase(especialistaRepository)
export const findByCrmSocketController = new FindByCrmSocketController(findByCrmUseCase)