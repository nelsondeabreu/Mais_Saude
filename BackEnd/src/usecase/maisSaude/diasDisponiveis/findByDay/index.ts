import { DiasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/DiasDisponiveisRepository";
import { FindByDayController } from "./findByDayController";
import { FindByDayUseCase } from "./findByDayUseCase";




const diasDisponiveis = new DiasDisponiveisRepository()
const findByDayUseCase = new FindByDayUseCase(diasDisponiveis)
export const findByDayController = new FindByDayController(findByDayUseCase)