import { IHorasDisponiveisRepository,IHorasDisponiveisDTO } from "../../../../repositories/maisSaude/IHorasDisponiveisRepository";



export class AddHourSocketUseCase {

  constructor(private horasDisponiveis: IHorasDisponiveisRepository){}

  async execute(data:IHorasDisponiveisDTO){
      const addHour = await this.horasDisponiveis.addHour(data)
      return addHour
  }
}