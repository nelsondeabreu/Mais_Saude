import { NotificationsRepository } from "../../../../repositories/maisSaude/Implements/NotificationsRepository";
import { CountNotificationController } from "./countNotificationController";
import { CountNotificationUseCase } from "./countNotificationUseCase";



const notificationRepository = new NotificationsRepository()
const countNotificationUseCase = new CountNotificationUseCase(notificationRepository)
export const countNotificationController = new CountNotificationController(countNotificationUseCase)