import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";
import { DeleteByCrmController } from "./deleteByCrmController";
import { DeleteByCrmUseCase } from "./deleteByCrmUseCase";



const especialistRepository = new EspecialistasRepository()
const deleteByCrmUseCase = new DeleteByCrmUseCase(especialistRepository)
export const deleteByCrmController = new DeleteByCrmController(deleteByCrmUseCase)