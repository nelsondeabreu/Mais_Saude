import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository";
import { FindByIDSocketController } from "./findByIDSocketController";
import { FindByIDUseCase } from "./findByIDSocketUseCase";


const entidadesRepository = new EntidadeSistemRepository()
const findByIDUseCase =  new FindByIDUseCase(entidadesRepository);
export const findEntityByIDSocketController = new FindByIDSocketController(findByIDUseCase)