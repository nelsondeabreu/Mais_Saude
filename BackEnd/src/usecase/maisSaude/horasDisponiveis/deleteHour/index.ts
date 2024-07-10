import { HorasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/HorasDisponiveisRepository";
import { DeleteHourController } from "./deleteHourController";
import { DeleteHourUseCase } from "./deleteHourUseCase";


const horasDisponiveisRepository = new HorasDisponiveisRepository();
const deleteHourUseCase = new DeleteHourUseCase(horasDisponiveisRepository)
export const deleteHourController = new DeleteHourController(deleteHourUseCase)
