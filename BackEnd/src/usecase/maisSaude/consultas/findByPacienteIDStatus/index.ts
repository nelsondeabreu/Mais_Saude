import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";
import { FindByPacienteStatusController } from "./findByPacienteIDStatusController";
import { FindByPacienteIDStatusUseCase } from "./findByPacienteIDStatusUseCase";


const consultasRepository = new ConsultasRepository();
const findByPacienteIDStatusUseCase = new FindByPacienteIDStatusUseCase(consultasRepository);
export const findByPacienteStatusController = new FindByPacienteStatusController(findByPacienteIDStatusUseCase);

