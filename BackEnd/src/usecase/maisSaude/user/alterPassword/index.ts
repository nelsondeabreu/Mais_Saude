import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { AlterPasswordController } from "./alterPasswordController";
import { AlterPassWordUseCase } from "./alterPasswordUseCase";





const userRepository = new UserRepository()
const alterPasswordUseCase = new AlterPassWordUseCase(userRepository)
export const alterPasswordController = new AlterPasswordController(alterPasswordUseCase)