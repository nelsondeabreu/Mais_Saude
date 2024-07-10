import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";
import { FindByCrmController } from "./testeCrmController";
import { FindByCrmUseCase } from "./testeCrmUseCase";




const userRepository = new UserRepository()
const findByCrmUseCase = new FindByCrmUseCase(userRepository)
export const findByCrmController = new FindByCrmController(findByCrmUseCase)