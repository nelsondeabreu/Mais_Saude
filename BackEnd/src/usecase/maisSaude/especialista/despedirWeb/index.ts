import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";
import { DespedirController } from "./despedirController";
import { DespedirUseCase } from "./despedirUseCase";

const especialistaRepository = new EspecialistasRepository()
const despedirUseCase = new DespedirUseCase(especialistaRepository)
export const despedirWebController = new DespedirController(despedirUseCase)