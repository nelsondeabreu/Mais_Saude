import { EspecialistasRepository } from "../../../../repositories/minsa/implements/EspecialistasRepository"



export class FindByCrmUseCase {

  constructor(private especialistaRepository: EspecialistasRepository){}

  async execute(crm: string){

    const foundEspecialist = await this.especialistaRepository.findByCrm(crm)

    return foundEspecialist
  }
}