import { ReactionsRepository } from "../../../../repositories/maisSaude/Implements/ReactionsRepository";
import { CreateReactionsController } from "./createReactionsController";
import { CreateReactionsUseCase } from "./createReationsUseCase";




const reactionsRepository = new ReactionsRepository()
const createReactionsUseCase = new CreateReactionsUseCase(reactionsRepository)
export const createReactionsController = new CreateReactionsController(createReactionsUseCase)