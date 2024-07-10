import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";
import { FindByDayAndHourController } from "./findByDayAndHourController";
import { FindByDayAndHourUseCase } from "./findByDayAndHourUseCase";


const consultaRepository = new ConsultasRepository()
const findByDayAndHourUseCase = new FindByDayAndHourUseCase(consultaRepository)
export const findByDayAndHourController = new FindByDayAndHourController(findByDayAndHourUseCase)