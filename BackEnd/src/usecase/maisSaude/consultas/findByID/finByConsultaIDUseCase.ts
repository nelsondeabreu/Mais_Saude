import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";



export class FindByConsultaIDUseCase{

constructor(private consultaRepository:ConsultasRepository){}

  execute(id:string){
    return this.consultaRepository.findByID(id)
  }
}