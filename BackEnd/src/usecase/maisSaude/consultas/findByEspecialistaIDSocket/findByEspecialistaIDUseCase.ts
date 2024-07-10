import { Consulta } from "../../../../generated/client1";
import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";



export class FindByEspecialistaIDSocketUseCase {

  constructor(private consultaRepository: ConsultasRepository){}

  async execute(especialistaID:string,status:Consulta){
    const foundConsulta = await this.consultaRepository.findByEspecialistIDOnly(especialistaID);
    return foundConsulta;
  }
}