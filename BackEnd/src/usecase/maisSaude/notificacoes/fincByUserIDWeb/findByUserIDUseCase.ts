import { INotificationsRepository } from "../../../../repositories/maisSaude/INotificationsRepository";


export class FindByUserIDSocketUseCase {
  constructor(private notifcationRepository:INotificationsRepository){}

   handle(destinatarioID:string) {
    return this.notifcationRepository.findByUserID(destinatarioID)
  }
}