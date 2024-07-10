import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";



export class DespedirUseCase{

  constructor(private especialistaRepository:EspecialistasRepository){}

  async execute(crm:string,entidadeID:string){
    return await this.especialistaRepository.despedir(crm,entidadeID)
  }
}