import { INotificationsRepository } from "../../../../repositories/maisSaude/INotificationsRepository";




export class FindByUserIDUseCase {
  constructor(private notifcationRepository:INotificationsRepository){}

  async handle(destinatarioID:string) {
    return this.notifcationRepository.findByUserID(destinatarioID)
  }
}