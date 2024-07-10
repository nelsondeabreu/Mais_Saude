import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";
import { AddValueConsultController } from "./addValueConsultController";
import { AddValueConsultUseCase } from "./addValueConsultUseCase";




const especialistaRepository = new EspecialistasRepository()
const addValueConsultUseCase = new AddValueConsultUseCase(especialistaRepository)
export const addValueConsultController = new AddValueConsultController(addValueConsultUseCase)