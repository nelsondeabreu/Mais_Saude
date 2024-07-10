import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";
import { FindByPacienteController } from "./findByPacienteIDController";
import { FindByPacienteIDUseCase } from "./findByPacienteIDUseCase";


const consultasRepository = new ConsultasRepository();
const findBypacienteIDUseCase = new FindByPacienteIDUseCase(consultasRepository);
export const findByPacienteController = new FindByPacienteController(findBypacienteIDUseCase);

