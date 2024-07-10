import { HorasDisponiveis } from "../../../../generated/client1";
import { HorasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/HorasDisponiveisRepository";


export class DeleteHourUseCase {

  constructor(private horasDisponiveisRepository: HorasDisponiveisRepository){}

  async execute (id:string){

    const deleteHour = await this.horasDisponiveisRepository.deleteHour(id)
    return deleteHour
    
  }
}