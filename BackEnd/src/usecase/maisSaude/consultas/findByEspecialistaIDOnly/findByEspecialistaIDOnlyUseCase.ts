import { Consulta } from "../../../../generated/client1";
import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";



export class FindByEspecialistaIDOnlyUseCase {

  constructor(private consultaRepository: ConsultasRepository){}

  async execute(especialistaID:string){

    if(especialistaID){
      const foundConsulta = await this.consultaRepository.findByEspecialistIDOnly(especialistaID);
      return foundConsulta;
    }
    
  }
}