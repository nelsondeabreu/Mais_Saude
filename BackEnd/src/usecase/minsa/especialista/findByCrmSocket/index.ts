import { EspecialistasRepository } from "../../../../repositories/minsa/implements/EspecialistasRepository";
import { FindByCrmMinsaController } from "./findByCrmMinsaSocketController";
import { FindByCrmUseCase } from "./findByCrmUseCase";


const especialistaRepository = new EspecialistasRepository();
const findByCrmUseCase = new FindByCrmUseCase(especialistaRepository)
export const findByCrmMinsaController = new FindByCrmMinsaController(findByCrmUseCase)