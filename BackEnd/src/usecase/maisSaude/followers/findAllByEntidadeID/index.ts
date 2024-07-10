import { FollowersRepository } from "../../../../repositories/maisSaude/Implements/FollowersRepository";
import { FindAllByEntidadeIDController } from "./findAllByEntidadeIDController";
import { FindAllByEntidadeIDUseCase } from "./findAllByEntidadeIDUseCase";



const followersRepository = new FollowersRepository()
const findAllByEntidadeIDUseCase = new  FindAllByEntidadeIDUseCase(followersRepository)
export const findAllByEntidadeIDController = new FindAllByEntidadeIDController(findAllByEntidadeIDUseCase)