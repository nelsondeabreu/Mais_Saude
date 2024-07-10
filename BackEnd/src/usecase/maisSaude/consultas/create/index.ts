import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";
import { CreateController } from "./createController";
import { CreateUseCase } from "./createUseCase";



const consultasRepository = new ConsultasRepository();
const createUseCase = new CreateUseCase(consultasRepository);
export const createController = new CreateController(createUseCase);