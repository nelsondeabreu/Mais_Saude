import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { VerifyTokenController } from "./VerifyTokenController";
import { VerifyTokenUseCase } from "./VerifyTokenUseCase";



const userRepository = new UserRepository()
const verifyTokenUseCase = new VerifyTokenUseCase(userRepository)
const verifyTokenController = new VerifyTokenController(verifyTokenUseCase)

export {verifyTokenController}