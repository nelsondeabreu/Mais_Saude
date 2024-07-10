import { FollowersRepository } from "../../../../repositories/maisSaude/Implements/FollowersRepository";
import { CountFollowersWebController } from "./countFollowersWebController";
import { CountFollowersUseCase } from "./countFollowersUseCase";




const followersRepository = new  FollowersRepository()
const countFollowersUseCase = new CountFollowersUseCase(followersRepository)
export const countFollowersWebController = new CountFollowersWebController(countFollowersUseCase)