import { HorasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/HorasDisponiveisRepository";



export class GetHorasDisponiveisUseCase {

  constructor(private horasDisponiveisRepository: HorasDisponiveisRepository){}

  async execute (especialistaID: string) {
    const horasDisponiveis = await this.horasDisponiveisRepository.getHorasDisponiveisByEspecialistaId(especialistaID)
    return horasDisponiveis
  }
}