import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";
import { FindByEspecialistaIDSocketController } from "./findByEspecialistaIDController";
import { FindByEspecialistaIDSocketUseCase } from "./findByEspecialistaIDUseCase";


const consultasRepository = new ConsultasRepository();
const findByEspecialistaIDUseCase = new FindByEspecialistaIDSocketUseCase(consultasRepository);
export const findByEspecialistaIDSocketController = new FindByEspecialistaIDSocketController(findByEspecialistaIDUseCase);

