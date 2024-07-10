import { HorasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/HorasDisponiveisRepository";
import { DeleteHourByEspecialistaIDController } from "./deleteHourSocketController";
import { DeleteHourUseCase } from "./deleteHourUseCase";


const horasDisponiveisRepository = new HorasDisponiveisRepository();
const deleteHourUseCase = new DeleteHourUseCase(horasDisponiveisRepository)
export const deleteHourByEspecialistaIDController = new DeleteHourByEspecialistaIDController(deleteHourUseCase)
