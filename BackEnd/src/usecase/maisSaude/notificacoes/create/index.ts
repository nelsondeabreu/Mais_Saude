import { NotificationsRepository } from "../../../../repositories/maisSaude/Implements/NotificationsRepository";
import { CreateNotificationController } from "./createNotificationController";
import { CreateNotificationUseCase } from "./createNotificationUseCase";



const notificationRepository= new NotificationsRepository()
const createNotificationUseCase = new CreateNotificationUseCase(notificationRepository)
export const createNotificationController =  new CreateNotificationController(createNotificationUseCase)