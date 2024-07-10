import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository";
import { ListController } from "./listController";
import { ListUseCase } from "./listUseCase";




const EntidadeSistemaRepository = new EntidadeSistemRepository();
const listUseCase =  new ListUseCase(EntidadeSistemaRepository);
export const listController = new ListController(listUseCase)