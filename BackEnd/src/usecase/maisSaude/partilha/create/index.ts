import { ShareRepository } from "../../../../repositories/maisSaude/Implements/IShareRepository";
import { CreatePartilhaController } from "./createPartilhaController";
import { CreatePartilhaUseCase } from "./createPartilhaUseCase";




const partilhaRepository = new ShareRepository()
const createPartilhaUseCase = new CreatePartilhaUseCase(partilhaRepository)
export const createPartilhaController = new CreatePartilhaController(createPartilhaUseCase) 
