import { ReactionsRepository } from "../../../../repositories/maisSaude/Implements/ReactionsRepository";
import { FindByPostIdAndUserIDController } from "./findByPostIdAndUserIDController";
import { FindByPostIdAndUserIDUseCase } from "./findByPostIdAndUserIDUseCase";



const reactionsRepository = new ReactionsRepository()
const findByPostIdAndUserIDUseCase = new FindByPostIdAndUserIDUseCase(reactionsRepository)
export const findByPostIdAndUserIDController = new FindByPostIdAndUserIDController(findByPostIdAndUserIDUseCase)