import { NotificationsRepository } from "../../../../repositories/maisSaude/Implements/NotificationsRepository"
import { FindByUserIDSocketController } from "./findByUserIDController"
import { FindByUserIDSocketUseCase } from "./findByUserIDUseCase"


const notificationRepository= new NotificationsRepository()
const findByUserIDSocketUseCase = new FindByUserIDSocketUseCase(notificationRepository)
export const findByUserIDSocketController = new FindByUserIDSocketController(findByUserIDSocketUseCase)