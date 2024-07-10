import { NotificationsRepository } from "../../../../repositories/maisSaude/Implements/NotificationsRepository";



export class DeleteNotificationUseCase {

  constructor(private notificationsRepository:NotificationsRepository){}

  async execute(id:string){
    return this.notificationsRepository.delete(id)
  }
}