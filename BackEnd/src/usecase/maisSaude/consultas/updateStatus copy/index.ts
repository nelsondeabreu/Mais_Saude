import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";
import { UpdateStatusController } from "./updateStatusController";
import { UpdateStatusUseCase } from "./updateStatusUseCase";



const consultasRepository = new ConsultasRepository();
const updateStatusUseCase = new UpdateStatusUseCase(consultasRepository)
export const updateStatusController = new UpdateStatusController(updateStatusUseCase)