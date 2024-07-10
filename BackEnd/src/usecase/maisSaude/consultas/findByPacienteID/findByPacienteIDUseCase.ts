import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";



export class FindByPacienteIDUseCase {

  constructor(private consultaRepository: ConsultasRepository){}

  async execute(pacienteID:string){

    const foundConsulta = await this.consultaRepository.findByPacienteID(pacienteID);
    return foundConsulta;
  }
}