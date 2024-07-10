import { HorasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/HorasDisponiveisRepository";
import { AddHourSocketController } from "./addHourSocketController";
import { AddHourSocketUseCase } from "./addHourSocketUseCase";



const horasDisponiveisRepository = new HorasDisponiveisRepository();
const addHourSocketUseCase = new AddHourSocketUseCase(horasDisponiveisRepository);
export const addHourSocketController = new AddHourSocketController(addHourSocketUseCase);