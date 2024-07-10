import { HorasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/HorasDisponiveisRepository";
import { GetHorasDisponiveisController } from "./getHorasDisponiveisController";
import { GetHorasDisponiveisUseCase } from "./getHorasDisponiveisUseCase";



const horasDisponiveisRepository = new HorasDisponiveisRepository();
const getHorasDisponiveisUseCase = new GetHorasDisponiveisUseCase(horasDisponiveisRepository)
export const getHorasDisponiveisController = new GetHorasDisponiveisController(getHorasDisponiveisUseCase)