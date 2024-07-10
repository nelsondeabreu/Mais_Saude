import { FollowersRepository } from "../../../../repositories/maisSaude/Implements/FollowersRepository";
import { CreateFollowerController } from "./createFollowerController";
import { CreateFollowerUseCase } from "./createFollowerUseCase";



const followersRepository = new FollowersRepository()
const createFollowerUseCase = new CreateFollowerUseCase(followersRepository)
export const createFollowerController = new CreateFollowerController(createFollowerUseCase)