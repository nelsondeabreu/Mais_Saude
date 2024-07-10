import { EntidadesMinsaRepository } from "../../../repositories/minsa/implements/EntidadesRepository";
import { FindByCnpjController } from "./findByCnpjController";
import { FindByCnpjUseCase } from "./findByCnpjUseCase";




const entidadesRepository = new EntidadesMinsaRepository()
const findByCnpjUseCase =  new FindByCnpjUseCase(entidadesRepository);
export const findByCnpjController = new FindByCnpjController(findByCnpjUseCase)