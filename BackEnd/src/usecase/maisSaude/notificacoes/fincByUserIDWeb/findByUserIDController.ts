import { FindByUserIDSocketUseCase } from "./findByUserIDUseCase";

export class FindByUserIDSocketController {

  constructor(private findByUserIDSocketUseCase:FindByUserIDSocketUseCase){}

   hanlde(destinatarioID:string){
    try{
      return this.findByUserIDSocketUseCase.handle(destinatarioID)
    }catch(Error){
      return console.error({message:"Erro ao achar notificações do usuario", Error});
    }
  }
}