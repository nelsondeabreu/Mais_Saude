import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository";
import { FindByCnpjController } from "./findByCnpjController";
import { FindByCnpjUseCase } from "./findByCnpjUseCase";



const entidadesRepository = new EntidadeSistemRepository()
const findByCnpjUseCase =  new FindByCnpjUseCase(entidadesRepository);
export const findByCnpjController = new FindByCnpjController(findByCnpjUseCase)