import { IDayHour } from "../../../../repositories/maisSaude/IConsultasRepository";
import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";




export class FindByDayAndHourUseCase{

  constructor(private consultaRepository:ConsultasRepository){}

  execute(data:IDayHour){
    return this.consultaRepository.findByDayAndHour(data)
  }
}