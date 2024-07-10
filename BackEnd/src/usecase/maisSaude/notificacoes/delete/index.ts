import { NotificationsRepository } from "../../../../repositories/maisSaude/Implements/NotificationsRepository";
import { DeleteNotificationController } from "./deleteNotificationController";
import { DeleteNotificationUseCase } from "./deleteNotificationUseCase";


const notificationRepository= new NotificationsRepository()
const deleteNotificationUseCase = new DeleteNotificationUseCase(notificationRepository)
export const deleteNotificationsController =  new DeleteNotificationController(deleteNotificationUseCase)
