import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";


export class BlockedUseCase{
  constructor(private especialistaRepository:EspecialistasRepository){}

  async execute(crm:string){
    const found = await this.especialistaRepository.findByCrm(crm)
    if(found && found.bloqueado === "true"){
      return this.especialistaRepository.blocked(crm,"false")
    }else{
      return this.especialistaRepository.blocked(crm,"true")
    }
  }
}