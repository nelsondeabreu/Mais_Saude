import { INotificationDTO, INotificationsRepository } from "../../../../repositories/maisSaude/INotificationsRepository";


export class FindByUserReceiverIDUseCase {
  constructor(private notifcationRepository:INotificationsRepository){}

   handle(data:INotificationDTO) {
    return this.notifcationRepository.findByUserReceiverID(data)
  }
}