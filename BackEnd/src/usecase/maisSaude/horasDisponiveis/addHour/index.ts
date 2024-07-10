import { HorasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/HorasDisponiveisRepository";
import { AddHourController } from "./addHourController";
import { AddHourUseCase } from "./addHourUseCase";



const horasDisponiveisRepository = new HorasDisponiveisRepository();
const addHourUseCase = new AddHourUseCase(horasDisponiveisRepository);
export const addHourController = new AddHourController(addHourUseCase);