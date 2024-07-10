import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { AddSocketIDController } from "./addSocjetIDController";
import { AddSocketIDUseCase } from "./addSocketIDUseCase";





const userRepository = new UserRepository()
const addSocketIDUseCase = new AddSocketIDUseCase(userRepository);
export const addSocketIDController = new AddSocketIDController(addSocketIDUseCase);