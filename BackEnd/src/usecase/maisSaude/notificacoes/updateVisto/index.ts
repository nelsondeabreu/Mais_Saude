import { NotificationsRepository } from "../../../../repositories/maisSaude/Implements/NotificationsRepository";
import { UpdateVistoController } from "./updateVistoController";
import { UpdateVistoUseCase } from "./updateVistoUseCase";


const notificationRepository = new NotificationsRepository()
const updateVistoUseCase = new UpdateVistoUseCase(notificationRepository)
export const updateVistoController = new UpdateVistoController(updateVistoUseCase)

