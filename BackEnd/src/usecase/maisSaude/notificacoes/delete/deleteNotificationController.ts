import { DeleteNotificationUseCase } from "./deleteNotificationUseCase";




export class DeleteNotificationController {

  constructor(private deleteNotificationUseCase:DeleteNotificationUseCase){}

   handle(id:string){
    try{
      return this.deleteNotificationUseCase.execute(id)
    }catch(error){
      return console.error({message:"Erro ao eliminar notificacao",error});
    }
  }
}