import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository";
import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { AddImageController } from "./addImageController";
import { AddImageUseCase } from "./addImageUseCase";


const entidadeRepository = new EntidadeSistemRepository()
const addImageUseCase = new AddImageUseCase(entidadeRepository)
export const addImageController = new AddImageController(addImageUseCase)