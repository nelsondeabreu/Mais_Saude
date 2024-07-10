import { DiasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/DiasDisponiveisRepository";
import { FindByDayController } from "./findByDaySocketController";
import { FindByDaySocketUseCase } from "./findByDaySocketUseCase";


const diasDisponiveis = new DiasDisponiveisRepository()
const findByDaySocketUseCase = new FindByDaySocketUseCase(diasDisponiveis)
export const findByDaySocketController = new FindByDayController(findByDaySocketUseCase)