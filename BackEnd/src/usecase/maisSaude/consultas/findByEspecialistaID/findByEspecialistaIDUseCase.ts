import { Consulta } from "../../../../generated/client1";
import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";



export class FindByEspecialistaIDUseCase {

  constructor(private consultaRepository: ConsultasRepository){}

  async execute(especialistaID:string,status:Consulta){

    if(especialistaID && status){
      const foundConsulta = await this.consultaRepository.findByEspecialistID(especialistaID,status);
      return foundConsulta
    }
    
  }
}