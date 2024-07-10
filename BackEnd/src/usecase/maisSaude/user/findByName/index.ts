import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { FindByNameController } from "./findByNameController";
import { FindByNameUseCase } from "./findByNameUseCase";




const userRepository = new UserRepository()
const findByNameUseCase = new FindByNameUseCase(userRepository)
export const findByNameController = new FindByNameController(findByNameUseCase)