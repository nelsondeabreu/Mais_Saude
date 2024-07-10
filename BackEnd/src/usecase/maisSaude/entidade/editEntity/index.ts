import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository"
import { EditEntityController } from "./editEntityController"
import { EditEntityUseCase } from "./editEntityUseCase"





const entidadesRepository = new EntidadeSistemRepository()
const editEntityUseCase = new EditEntityUseCase(entidadesRepository)
export const editEntityController = new EditEntityController(editEntityUseCase)