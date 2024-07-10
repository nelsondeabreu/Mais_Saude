import { NotificationsRepository } from "../../../../repositories/maisSaude/Implements/NotificationsRepository"
import { FindByUserAndReceiverIDController } from "./findByUserIDController"
import { FindByUserReceiverIDUseCase } from "./findByUserIDUseCase"


const notificationRepository= new NotificationsRepository()
const findByUserReceiverIDUseCase = new FindByUserReceiverIDUseCase(notificationRepository)
export const findByUserAndReceiverIDController = new FindByUserAndReceiverIDController(findByUserReceiverIDUseCase)