import { DiasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/DiasDisponiveisRepository";
import { AddDaySocketController } from "./addDaySocketController";
import { AddDaySocketUseCase } from "./addDaySocketUseCase";




const diasDisponiveis = new DiasDisponiveisRepository()
const addDaySocketUseCase = new AddDaySocketUseCase(diasDisponiveis)
export const addDaySocketController = new AddDaySocketController(addDaySocketUseCase)