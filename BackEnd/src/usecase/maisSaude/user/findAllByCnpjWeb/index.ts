import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { FindAllByCnpjWebController } from "./findAllByCnpjController";
import { FindAllByCnpjUseCase } from "./findAllByCnpjUseCase";




const userRepository = new UserRepository()
const findAllByCnpjUseCase = new FindAllByCnpjUseCase(userRepository)
export const findAllByCnpjWebController = new FindAllByCnpjWebController(findAllByCnpjUseCase)