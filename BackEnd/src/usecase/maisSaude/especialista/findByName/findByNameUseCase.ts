import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";



export class FindByNameUseCase {

  constructor(private especialistaRepository: EspecialistasRepository){}

  async execute(nome: string){

    const foundEspecialist = await this.especialistaRepository.findByName(nome)

    return foundEspecialist
  }
}