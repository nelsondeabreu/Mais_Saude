import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";
import { FindByEspecialistaOnlyController } from "./findByEspecialistaIDOnlyController";
import { FindByEspecialistaIDOnlyUseCase } from "./findByEspecialistaIDOnlyUseCase";


const consultasRepository = new ConsultasRepository();
const findByEspecialistaIDUseCase = new FindByEspecialistaIDOnlyUseCase(consultasRepository);
export const findByEspecialistaOnlyController = new FindByEspecialistaOnlyController(findByEspecialistaIDUseCase);

