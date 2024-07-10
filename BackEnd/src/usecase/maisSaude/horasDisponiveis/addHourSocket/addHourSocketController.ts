import { AddHourSocketUseCase } from "./addHourSocketUseCase";
import { IHorasDisponiveisDTO } from "../../../../repositories/maisSaude/IHorasDisponiveisRepository";


export class AddHourSocketController {

  constructor (private addHourSocketUseCase: AddHourSocketUseCase){}

  async handle(data:IHorasDisponiveisDTO){

    try{
      const addHour = await this.addHourSocketUseCase.execute(data)
      return addHour
    }catch(error){
      return console.error({message:"Erro ao adicionar hora", error})
    }
  }
}