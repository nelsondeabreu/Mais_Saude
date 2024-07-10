import { parse } from "date-fns";
import { IDiasDisponiveisDTO, IDiasDisponiveisRepository } from "../../../../repositories/maisSaude/IDiasDisponiveisRepository";
import { IHorasDisponiveisRepository } from "../../../../repositories/maisSaude/IHorasDisponiveisRepository";

export class AddDaySocketUseCase {

  constructor(private diasDisponiveis: IDiasDisponiveisRepository){}

  async execute(data:IDiasDisponiveisDTO){
      const addDay = await this.diasDisponiveis.addDay(data)
      return addDay
  }
}