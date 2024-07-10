import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";
import { ListAllEspecialistasController } from "./listAllEspecialistasController";
import { ListAllEspecialistasUseCase } from "./listAllEspecialistasUseCase";




const especialistaRepository = new EspecialistasRepository();
const listAllEspecialistasUseCase = new ListAllEspecialistasUseCase(especialistaRepository);
export const listAllEspecialistasController = new ListAllEspecialistasController(listAllEspecialistasUseCase)
 