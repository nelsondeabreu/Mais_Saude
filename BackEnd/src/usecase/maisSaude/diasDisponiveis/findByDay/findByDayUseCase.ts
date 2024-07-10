import { IDiasDisponiveisDTO, IDiasDisponiveisRepository } from "../../../../repositories/maisSaude/IDiasDisponiveisRepository";



export class FindByDayUseCase {

  constructor(private diasDisponiveisRepository:IDiasDisponiveisRepository){}

  async execute(data:IDiasDisponiveisDTO){

    const foundDay = await this.diasDisponiveisRepository.findByDay(data)

    return foundDay
  }
}