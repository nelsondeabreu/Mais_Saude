import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { LogUserController } from "./logUserController";
import { LogUserUseCase } from "./logUserUseCase";




const userRepository = new UserRepository();
const logUserUseCase = new LogUserUseCase(userRepository)
const logUserController = new LogUserController(logUserUseCase)

export {logUserController}