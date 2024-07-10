import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";



export class DeleteByCrmUseCase{

  constructor(private especialistRepository:EspecialistasRepository){}

  execute(crm:string){
    return this.especialistRepository.deleteByCrm(crm)
  }
}