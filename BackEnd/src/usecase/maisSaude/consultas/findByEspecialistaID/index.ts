import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";
import { FindByEspecialistaController } from "./findByEspecialistaIDController";
import { FindByEspecialistaIDUseCase } from "./findByEspecialistaIDUseCase";


const consultasRepository = new ConsultasRepository();
const findByEspecialistaIDUseCase = new FindByEspecialistaIDUseCase(consultasRepository);
export const findByEspecialistaController = new FindByEspecialistaController(findByEspecialistaIDUseCase);

