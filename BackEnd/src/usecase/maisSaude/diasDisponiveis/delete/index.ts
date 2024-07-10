import { DiasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/DiasDisponiveisRepository";
import { DeleteDayController } from "./deleteDayController";
import { DeleteDayUseCase } from "./deleteDayUseCase";





const diasDisponiveisRepository = new DiasDisponiveisRepository()
const deleteDayUseCase = new DeleteDayUseCase(diasDisponiveisRepository)
export const deleteDayController = new DeleteDayController(deleteDayUseCase)
