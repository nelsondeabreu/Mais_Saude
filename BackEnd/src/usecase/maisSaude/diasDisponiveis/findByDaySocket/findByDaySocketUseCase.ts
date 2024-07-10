import { IDiasDisponiveisDTO, IDiasDisponiveisRepository } from "../../../../repositories/maisSaude/IDiasDisponiveisRepository";



export class FindByDaySocketUseCase {

  constructor(private diasDisponiveisRepository:IDiasDisponiveisRepository){}

  async execute(data:IDiasDisponiveisDTO){

    const foundDay = await this.diasDisponiveisRepository.findByDay(data)

    return foundDay
  }
}