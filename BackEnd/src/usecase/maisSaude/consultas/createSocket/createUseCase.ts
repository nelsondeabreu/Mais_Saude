import { IConsultas, IConsultasRepository } from "../../../../repositories/maisSaude/IConsultasRepository";



export class CreateConsultaSocketUseCase{

  constructor(private consultaRepository: IConsultasRepository){}

  async execute(data:IConsultas){
    data.data.setHours(0, 0, 0, 0)
    const verifyConsulta = await this.consultaRepository.findByDayAndHour({data:data.data,hour:data.hora,especialistaID:data.especialistaID})
    
    if(!verifyConsulta){
      const consulta = await this.consultaRepository.create(data)
      return consulta;
    }else{
      console.error("Tem consulta marcada nesse horario");
    }
    
  }

}