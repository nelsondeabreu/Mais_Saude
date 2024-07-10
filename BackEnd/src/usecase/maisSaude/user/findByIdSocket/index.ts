import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { FindByIDSocketController } from "./findByIDSocketControlller";
import { FindBySocketIDUseCase } from "./findByIDSocketUseCase";




const userRepository = new UserRepository()
const findBySocketIDUseCase = new FindBySocketIDUseCase(userRepository)
export const findByIDSocketController = new FindByIDSocketController(findBySocketIDUseCase)