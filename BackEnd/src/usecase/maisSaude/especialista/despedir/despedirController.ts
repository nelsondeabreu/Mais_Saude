import { error } from "console";
import { DespedirUseCase } from "./despedirUseCase";



export class DespedirController{

  constructor(private despedirUseCase: DespedirUseCase){}

  async handle(crm:string,entidadeID:string){
    try{
      return this.despedirUseCase.execute(crm,entidadeID) 
    }catch(Error){
      return error({message:"Erro ao despedir especialista", Error})
    }
  }
}