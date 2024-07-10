import { EspecialistasRepository } from "../../../../repositories/minsa/implements/EspecialistasRepository";




export class ListAllEspecialistasUseCase {

  constructor(private especialistaRepository: EspecialistasRepository){}

  async execute() {

    const allEspecialistas = await this.especialistaRepository.list();
    return allEspecialistas;
    
  }
}