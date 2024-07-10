import { INotificationDTO } from "../../../../repositories/maisSaude/INotificationsRepository";
import { CreateNotificationUseCase } from "./createNotificationUseCase";




export class CreateNotificationController {

  constructor(private createNotificationUseCase: CreateNotificationUseCase){}

  async handle(data:INotificationDTO){
    try{
      return this.createNotificationUseCase.execute(data)
    }catch(Error){
      console.error({message:"Erro ao criar notificação", Error});
    }
  }
}