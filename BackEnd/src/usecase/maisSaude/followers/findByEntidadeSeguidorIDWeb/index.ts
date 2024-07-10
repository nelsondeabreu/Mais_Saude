import { FollowersRepository } from "../../../../repositories/maisSaude/Implements/FollowersRepository"
import { FindByEntidadeSeguidorIDWebController } from "./findByEntidadeSeguidorIDWebController"
import { FindByEntidadeSeguidorIDWebUseCase } from "./findByEntidadeSeguidorIDWebUseCase"


const followersRepository = new FollowersRepository()
const findByEntidadeSeguidorIDUseCase = new  FindByEntidadeSeguidorIDWebUseCase(followersRepository)
export const findByEntidadeSeguidorIDWebController = new FindByEntidadeSeguidorIDWebController(findByEntidadeSeguidorIDUseCase)