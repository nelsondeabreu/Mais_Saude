import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository";
import { FindByIDController } from "./findByIDController";
import { FindByIDUseCase } from "./findByIDUseCase";


const entidadesRepository = new EntidadeSistemRepository()
const findByIDUseCase =  new FindByIDUseCase(entidadesRepository);
export const findByIDController = new FindByIDController(findByIDUseCase)