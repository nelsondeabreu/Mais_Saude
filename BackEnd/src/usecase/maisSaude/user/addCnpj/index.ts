import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { AddCnpjController } from "./addCnpjController";
import { AddCnpjUseCase } from "./addCnpjUseCase";



const userRepository = new UserRepository();
const addCnpjUseCase = new AddCnpjUseCase(userRepository);
export const addCnpjController = new AddCnpjController(addCnpjUseCase)