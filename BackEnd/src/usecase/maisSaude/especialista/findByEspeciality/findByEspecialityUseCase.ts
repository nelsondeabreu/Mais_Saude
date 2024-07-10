import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";



export class FindByEspecialityUseCase {

  constructor(private especialistaRepository: EspecialistasRepository){}

  async execute(especialidade: string){

    const foundEspecialist = await this.especialistaRepository.findByEspeciality(especialidade)

    return foundEspecialist
  }
}