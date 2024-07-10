import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { ListUsersController } from "./listUsersController";
import { ListUsersUseCase } from "./listUsersUseCase";





const userRepository = new UserRepository()
const listUsersUseCase = new ListUsersUseCase(userRepository)
export const listUsersController = new ListUsersController(listUsersUseCase)