import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { AddCrmWebController } from "./addCrmWebController";
import { AddCrmUseCase } from "./addCrmUseCase";



const userRepository = new UserRepository()
const addCrmUseCase = new AddCrmUseCase(userRepository)
export const addCrmWebController = new AddCrmWebController(addCrmUseCase)