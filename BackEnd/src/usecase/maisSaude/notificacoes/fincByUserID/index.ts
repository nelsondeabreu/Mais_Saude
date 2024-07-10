import { NotificationsRepository } from "../../../../repositories/maisSaude/Implements/NotificationsRepository"
import { FindByUserIDController } from "./findByUserIDController"
import { FindByUserIDUseCase } from "./findByUserIDUseCase"




const notificationRepository= new NotificationsRepository()
const findByUserIDUseCase = new FindByUserIDUseCase(notificationRepository)
export const findByUserIDController = new FindByUserIDController(findByUserIDUseCase)