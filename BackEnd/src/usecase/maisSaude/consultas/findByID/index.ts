import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";
import { FindByConsultaIDUseCase } from "./finByConsultaIDUseCase";
import { FindByConsultaIDController } from "./findByConsultaIDController";




const consultasRepository = new ConsultasRepository();
const findByConsultaIDUseCase = new FindByConsultaIDUseCase(consultasRepository)
export const findByConsultaIDController = new FindByConsultaIDController(findByConsultaIDUseCase)