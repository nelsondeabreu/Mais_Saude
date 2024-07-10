import { FollowersRepository } from "../../../../repositories/maisSaude/Implements/FollowersRepository"
import { FindByEntidadeSeguidorIDController } from "./findByEntidadeSeguidorIDController"
import { FindByEntidadeSeguidorIDUseCase } from "./findByEntidadeSeguidorIDUseCase"




const followersRepository = new FollowersRepository()
const findByEntidadeSeguidorIDUseCase = new  FindByEntidadeSeguidorIDUseCase(followersRepository)
export const findByEntidadeSeguidorIDController = new FindByEntidadeSeguidorIDController(findByEntidadeSeguidorIDUseCase)