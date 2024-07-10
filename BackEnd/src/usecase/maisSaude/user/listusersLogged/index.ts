import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { ListUserLoggedController } from "./listUserLoggedController";
import { ListUserLoggedUseCase } from "./listUserLoggedUseCase";


const userRepository = new UserRepository()
const listUsersLoggedUseCase = new ListUserLoggedUseCase(userRepository)
const listUserLoggedController = new ListUserLoggedController(listUsersLoggedUseCase)

export {listUserLoggedController}