import { NotificationsRepository } from "../../../../repositories/maisSaude/Implements/NotificationsRepository";



export class CountNotificationUseCase{

  constructor(private notificationRepository:NotificationsRepository){}

  execute(destinatarioID:string){
      return this.notificationRepository.countNotificationNoRead(destinatarioID)
  }
}