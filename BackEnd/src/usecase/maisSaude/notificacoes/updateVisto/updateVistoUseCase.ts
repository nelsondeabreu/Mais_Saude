import { NotificationsRepository } from "../../../../repositories/maisSaude/Implements/NotificationsRepository";


export class UpdateVistoUseCase{

  constructor(private notificationRepository: NotificationsRepository){}

  execute(id:string){
    return this.notificationRepository.alterVisto(id)
  }

}