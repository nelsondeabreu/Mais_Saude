import { DiasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/DiasDisponiveisRepository";
import { AddDayController } from "./addDayController";
import { AddDayUseCase } from "./addDayUseCase";




const diasDisponiveis = new DiasDisponiveisRepository()
const addDayUseCase = new AddDayUseCase(diasDisponiveis)
export const addDayController = new AddDayController(addDayUseCase)