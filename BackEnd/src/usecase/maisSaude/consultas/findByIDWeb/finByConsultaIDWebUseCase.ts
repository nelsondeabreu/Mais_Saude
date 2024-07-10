import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";



export class FindByConsultaIDWebUseCase{

constructor(private consultaRepository:ConsultasRepository){}

  execute(id:string){
    return this.consultaRepository.findByID(id)
  }
}