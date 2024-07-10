import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository";
import { DeleteAllController } from "./deleteAllController";
import { DeleteAllUseCase } from "./deleteAllUseCase";




const entidadesRepository = new EntidadeSistemRepository()
const deleteAllUseCase =  new DeleteAllUseCase(entidadesRepository);
export const deleteAllController = new DeleteAllController(deleteAllUseCase)
