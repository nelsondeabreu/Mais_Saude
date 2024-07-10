import { IAddValue, IEspecialistasRepository } from "../../../../repositories/maisSaude/IEspecialistasRepository";
import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";


export class AddValueConsultUseCase {

  constructor(private especialistasRepository: EspecialistasRepository){}

  async execute(data:IAddValue){

    const addValue = await this.especialistasRepository.addValueConsult(data)
    return addValue
    
  }
}