import { EspecialistasRepository } from "../../../../repositories/minsa/implements/EspecialistasRepository";
import { ListAllEspecialistasController } from "./listAllEspecialistasController";
import { ListAllEspecialistasUseCase } from "./listAllEspecialistasUseCase";




const especialistaRepository = new EspecialistasRepository();
const listAllEspecialistasUseCase = new ListAllEspecialistasUseCase(especialistaRepository);
export const listAllEspecialistasController = new ListAllEspecialistasController(listAllEspecialistasUseCase)
 