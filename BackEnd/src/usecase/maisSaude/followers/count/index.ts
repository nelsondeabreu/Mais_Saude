import { FollowersRepository } from "../../../../repositories/maisSaude/Implements/FollowersRepository";
import { CountFollowersController } from "./countFollowersController";
import { CountFollowersUseCase } from "./countFollowersUseCase";




const followersRepository = new  FollowersRepository()
const countFollowersUseCase = new CountFollowersUseCase(followersRepository)
export const countFollowersController = new CountFollowersController(countFollowersUseCase)