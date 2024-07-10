import { HorasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/HorasDisponiveisRepository";



export class ListHoursUseCase {

  constructor(private horasDisponiveisRepository:HorasDisponiveisRepository){}

  async execute(){

    const getAllHours = await this.horasDisponiveisRepository.listHours()

    return getAllHours
  }
}