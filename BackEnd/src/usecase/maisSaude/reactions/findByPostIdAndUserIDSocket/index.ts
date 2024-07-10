import { ReactionsRepository } from "../../../../repositories/maisSaude/Implements/ReactionsRepository";
import { FindByPostIdAndUserIDSocketController } from "./findByPostIdAndUserIDSocketController";
import { FindByPostIdAndUserIDSocketUseCase } from "./findByPostIdAndUserIDSocketUseCase";



const reactionsRepository = new ReactionsRepository()
const findByPostIdAndUserIDSocketUseCase = new FindByPostIdAndUserIDSocketUseCase(reactionsRepository)
export const findByPostIdAndUserIDSocketController = new FindByPostIdAndUserIDSocketController(findByPostIdAndUserIDSocketUseCase)