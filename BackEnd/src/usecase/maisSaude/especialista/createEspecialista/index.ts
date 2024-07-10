import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";
import { CreateEspecialistasController } from "./createEspecialistaController";
import { CreateEspecialistaUseCase } from "./createEspecialistaUseCase";



const especialistaRepository = new EspecialistasRepository();
const createEspecialistaUseCase = new CreateEspecialistaUseCase(especialistaRepository);
export const createEspecialistaController = new CreateEspecialistasController(createEspecialistaUseCase);