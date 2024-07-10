import { INotificationDTO } from "../../../../repositories/maisSaude/INotificationsRepository";
import { FindByUserReceiverIDUseCase } from "./findByUserIDUseCase";

export class FindByUserAndReceiverIDController {

  constructor(private findByUserReceiverIDUseCase:FindByUserReceiverIDUseCase){}

   hanlde(data:INotificationDTO){
    try{
      return this.findByUserReceiverIDUseCase.handle(data)
    }catch(Error){
      return console.error({message:"Erro ao achar notificações do usuario", Error});
    }
  }
}