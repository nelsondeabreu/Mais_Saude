import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { AddAdminController } from "./addAdminController";
import { AddAdminUseCase } from "./addAdminUseCase";



const userRepository = new UserRepository();
const addAdminUseCase = new AddAdminUseCase(userRepository);
export const addAdminController = new AddAdminController(addAdminUseCase)