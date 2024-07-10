import { FollowersRepository } from "../../../../repositories/maisSaude/Implements/FollowersRepository";
import { FindAllByEntidadeIDWebController } from "./findAllByEntidadeIDWebController";
import { FindAllByEntidadeIDUseCase } from "./findAllByEntidadeIDUseCase";



const followersRepository = new FollowersRepository()
const findAllByEntidadeIDUseCase = new  FindAllByEntidadeIDUseCase(followersRepository)
export const findAllByEntidadeIDWebController = new FindAllByEntidadeIDWebController(findAllByEntidadeIDUseCase)