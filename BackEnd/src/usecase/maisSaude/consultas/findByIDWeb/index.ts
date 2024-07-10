import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";
import { FindByConsultaIDWebUseCase } from "./finByConsultaIDWebUseCase";
import { FindByConsultaIDWebController } from "./findByConsultaIDWebController";


const consultasRepository = new ConsultasRepository();
const findByConsultaIDWebUseCase = new FindByConsultaIDWebUseCase(consultasRepository)
export const findByConsultaIDWebController = new FindByConsultaIDWebController(findByConsultaIDWebUseCase)