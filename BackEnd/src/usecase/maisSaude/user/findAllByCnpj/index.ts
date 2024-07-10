import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { FindAllByCnpjController } from "./findAllByCnpjController";
import { FindAllByCnpjUseCase } from "./findAllByCnpjUseCase";




const userRepository = new UserRepository()
const findAllByCnpjUseCase = new FindAllByCnpjUseCase(userRepository)
export const findAllByCnpjController = new FindAllByCnpjController(findAllByCnpjUseCase)