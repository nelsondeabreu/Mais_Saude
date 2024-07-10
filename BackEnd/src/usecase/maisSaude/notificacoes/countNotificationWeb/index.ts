import { NotificationsRepository } from "../../../../repositories/maisSaude/Implements/NotificationsRepository";
import { CountNotificationWebController } from "./countNotificationController";
import { CountNotificationUseCase } from "./countNotificationUseCase";


const notificationRepository = new NotificationsRepository()
const countNotificationUseCase = new CountNotificationUseCase(notificationRepository)
export const countNotificationWebController = new CountNotificationWebController(countNotificationUseCase)