import { EspecialistasRepository } from "../../../../repositories/minsa/implements/EspecialistasRepository";
import { FindByCrmMinsaController } from "./findByCrmMinsaController";
import { FindByCrmUseCase } from "./findByCrmUseCase";


const especialistaRepository = new EspecialistasRepository();
const findByCrmUseCase = new FindByCrmUseCase(especialistaRepository)
export const findByCrmMinsaController = new FindByCrmMinsaController(findByCrmUseCase)