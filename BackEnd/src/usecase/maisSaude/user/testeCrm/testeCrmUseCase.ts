import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";
import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";


export class FindByCrmUseCase {

  constructor(private especialistaRepository: UserRepository){}

  async execute (crm:string) {
    return this.especialistaRepository.findByCrm(crm)
  }
}