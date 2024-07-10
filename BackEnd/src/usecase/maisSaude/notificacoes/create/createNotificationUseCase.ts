import { INotificationDTO, INotificationsRepository } from "../../../../repositories/maisSaude/INotificationsRepository";



export class CreateNotificationUseCase {
  constructor(private notificationRepository:INotificationsRepository){}

  async execute(data:INotificationDTO){
    try{

      if(data.tipo === "1"){
        const exist = await this.notificationRepository.findByUserReceiverID(data)
        if(!exist)
          return this.notificationRepository.create(data)
      }else{
        return this.notificationRepository.create(data)
      }

    }catch(Error){
      console.log("Erro ao criar notificação", Error);
    }
  }
}