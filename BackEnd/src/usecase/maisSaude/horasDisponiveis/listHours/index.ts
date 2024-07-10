import { HorasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/HorasDisponiveisRepository";
import { ListHoursController } from "./listHoursController";
import { ListHoursUseCase } from "./listHoursUseCase";


const horasDisponiveisRepository = new HorasDisponiveisRepository();
const listHoursUseCase = new ListHoursUseCase(horasDisponiveisRepository);
export const listHoursController = new ListHoursController(listHoursUseCase);
