import { error } from "console";
import { FindByCrmUseCase } from "./testeCrmUseCase";




export class FindByCrmController{

  constructor(private findByCrm:FindByCrmUseCase){}

  handle(crm:string){
    try{
      return this.findByCrm.execute(crm)
    }catch(Error){
      return error({message:"Erro ao achar por crm",Error})
    }
  }
}