import { Consulta } from "../../../../generated/client1";
import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";



export class UpdateStatusUseCase{

  constructor(private consultasRepository:ConsultasRepository){}

  async execute(id:string,status:Consulta){
      return this.consultasRepository.updateStatus(id,status)
  }
}