import { error } from "console";
import { BlockedUseCase } from "./blockedUseCase";



export class BlockedController {

  constructor(private blockedUseCase:BlockedUseCase){}

  handle(crm:string){
    try{
      return this.blockedUseCase.execute(crm)
    }catch(Error){
      return error({message:"Erro ao bloquear especialista",Error})
    }
  }
}