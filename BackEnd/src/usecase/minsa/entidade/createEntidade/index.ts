import { EntidadesMinsaRepository } from "../../../../repositories/minsa/implements/EntidadesRepository";
import { CreateEntitiController } from "./createEntitiController";
import { CreateEntitiUseCase } from "./createEntitiUseCase";



const entidadeRepository = new EntidadesMinsaRepository();
const createEntitiUseCase =  new CreateEntitiUseCase(entidadeRepository)
export const createEntitiController =  new CreateEntitiController(createEntitiUseCase)