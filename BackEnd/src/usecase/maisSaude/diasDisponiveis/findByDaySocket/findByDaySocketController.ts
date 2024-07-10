import { IDiasDisponiveisDTO } from "../../../../repositories/maisSaude/IDiasDisponiveisRepository";
import { FindByDaySocketUseCase } from "./findByDaySocketUseCase";



export class FindByDayController {

  constructor(private findByDaySocketUseCase: FindByDaySocketUseCase){}

  async handle(data:IDiasDisponiveisDTO){
    try{
      const foundDay = await this.findByDaySocketUseCase.execute(data)
      return foundDay
    }catch(error){
      return console.error({message:"Erro ao achar o date", error})
    }
  }

}