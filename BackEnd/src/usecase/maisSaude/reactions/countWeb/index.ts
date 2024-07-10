import { ReactionsRepository } from "../../../../repositories/maisSaude/Implements/ReactionsRepository"
import { CountController } from "./countController"
import { CountUseCase } from "./countUseCase"



const reactionsRepository = new ReactionsRepository()
const countUseCase = new CountUseCase(reactionsRepository)
export const countControllerWeb = new CountController(countUseCase)