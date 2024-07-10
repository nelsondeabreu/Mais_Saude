import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { FindByIDController } from "./findByIDControlller";
import { FindByIDUseCase } from "./findByIDUseCase";




const userRepository = new UserRepository()
const findByIDUseCase = new FindByIDUseCase(userRepository)
export const findByIDController = new FindByIDController(findByIDUseCase)