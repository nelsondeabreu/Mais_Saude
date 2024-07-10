import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository";
import { EntidadeController } from "./entidadeController";
import { EntidadeUseCase } from "./entidadeUseCase";




const EntidadeSistemaRepository = new EntidadeSistemRepository();
const entidadeUseCase =  new EntidadeUseCase(EntidadeSistemaRepository);
export const entidadeController = new EntidadeController(entidadeUseCase);