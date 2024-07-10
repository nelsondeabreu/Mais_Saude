import { UpdateMessageVistoUseCase } from "./updateMessageVistoUseCase";


export class UpdateMessageVistoController{

  constructor (private updateMessageVistoUseCase:UpdateMessageVistoUseCase){}

  handle(emissorID:string,receptorID:string){
    try{
      return this.updateMessageVistoUseCase.execute(emissorID,receptorID)
    }catch(Error){
      console.error({message:"Erro na atualização da mensagem",Error});
    }
  }
}