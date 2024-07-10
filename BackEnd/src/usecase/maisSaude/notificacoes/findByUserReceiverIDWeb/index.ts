import { NotificationsRepository } from "../../../../repositories/maisSaude/Implements/NotificationsRepository"
import { FindByUserAndReceiverIDWebController } from "./findByUserIDController"
import { FindByUserReceiverIDUseCase } from "./findByUserIDUseCase"


const notificationRepository= new NotificationsRepository()
const findByUserReceiverIDUseCase = new FindByUserReceiverIDUseCase(notificationRepository)
export const findByUserAndReceiverIDWebController = new FindByUserAndReceiverIDWebController(findByUserReceiverIDUseCase)