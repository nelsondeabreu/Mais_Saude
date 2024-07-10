import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { AddCrmController } from "./addCrmController";
import { AddCrmUseCase } from "./addCrmUseCase";



const userRepository = new UserRepository()
const addCrmUseCase = new AddCrmUseCase(userRepository)
export const addCrmController = new AddCrmController(addCrmUseCase)