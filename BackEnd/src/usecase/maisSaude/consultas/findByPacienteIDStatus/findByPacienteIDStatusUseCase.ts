import { Consulta } from "../../../../generated/client1";
import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";



export class FindByPacienteIDStatusUseCase {

  constructor(private consultaRepository: ConsultasRepository){}

  async execute(pacienteID:string,status:Consulta){

    const foundConsulta = await this.consultaRepository.findByPacienteIDStatus(pacienteID,status);
    return foundConsulta;
  }
}