import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";
import { CreateConsultaController } from "./createController";
import { CreateConsultaSocketUseCase } from "./createUseCase";



const consultasRepository = new ConsultasRepository();
const createConsultaSocketUseCase = new CreateConsultaSocketUseCase(consultasRepository);
export const createConsultaSocketController = new CreateConsultaController(createConsultaSocketUseCase);