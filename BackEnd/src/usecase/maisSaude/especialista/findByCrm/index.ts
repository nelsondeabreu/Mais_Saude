import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";
import { FindByCrmController } from "./findByCrmController";
import { FindByCrmUseCase } from "./findByCrmUseCase";




const especialistaRepository = new EspecialistasRepository();
const findByCrmUseCase = new FindByCrmUseCase(especialistaRepository)
export const findByCrmController = new FindByCrmController(findByCrmUseCase)