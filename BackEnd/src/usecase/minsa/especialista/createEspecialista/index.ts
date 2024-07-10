import { EspecialistasRepository } from "../../../../repositories/minsa/implements/EspecialistasRepository";
import { CreateEspecialistasController } from "./createEspecialistaController";
import { CreateEspecialistaUseCase } from "./createEspecialistaUseCase";



const especialistaRepository = new EspecialistasRepository();
const createEspecialistaUseCase = new CreateEspecialistaUseCase(especialistaRepository);
export const createEspecialistaController = new CreateEspecialistasController(createEspecialistaUseCase);