import { CountMessagesUseCase } from "./countMessagesUseCase";



export class CountMessagesController {

  constructor( private countMessageUseCase: CountMessagesUseCase){}

  handle(emissorID:string,receptorID:string){
    try{
      return this.countMessageUseCase.execute(emissorID,receptorID)
    }catch(error){
      return console.error({message:"ERRO NO SERVIDOR DE CONTAGEM",error});
    }
  }
}