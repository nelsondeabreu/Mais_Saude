import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";
import { FindByEspecialityController } from "./findByEspecialityController";
import { FindByEspecialityUseCase } from "./findByEspecialityUseCase";




const especialistaRepository = new EspecialistasRepository();
const findByEspecialityUseCase = new FindByEspecialityUseCase(especialistaRepository)
export const findByEspecialityController = new FindByEspecialityController(findByEspecialityUseCase)