import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";
import { FindByNameController } from "./findByNameController";
import { FindByNameUseCase } from "./findByNameUseCase";




const especialistaRepository = new EspecialistasRepository();
const findByNameUseCase = new FindByNameUseCase(especialistaRepository)
export const findByNameController = new FindByNameController(findByNameUseCase)