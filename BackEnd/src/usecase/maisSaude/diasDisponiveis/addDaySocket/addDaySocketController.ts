import { IDiasDisponiveisDTO } from "../../../../repositories/maisSaude/IDiasDisponiveisRepository";
import { AddDaySocketUseCase } from "./addDaySocketUseCase";



export class AddDaySocketController {

  constructor(private addDaySocketUseCase:AddDaySocketUseCase){}

  async handle(data:IDiasDisponiveisDTO){

    try{
      const addDay = await this.addDaySocketUseCase.execute(data)
      return addDay
    }catch(error){
      return console.error({message:"Erro ao adicionar dia", error})
    }
  }
}