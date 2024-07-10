import { CountNotificationUseCase } from "./countNotificationUseCase";



export class CountNotificationController {

  constructor(private countNotificationUseCase:CountNotificationUseCase){}

  handle(destinatarioID:string){
    try{
      return this.countNotificationUseCase.execute(destinatarioID)
    }catch(error){
      return console.error({message:"Erro na contagem das notificacoes",error})
    }
  }
}