import { IConsultas, IConsultasRepository } from "../../../../repositories/maisSaude/IConsultasRepository";



export class CreateUseCase{

  constructor(private consultaRepository: IConsultasRepository){}

  async execute(data:IConsultas){
    console.log(data,"kpojihugyf");
    
    const verifyConsulta = await this.consultaRepository.findByDayAndHour({data:data.data,hour:data.hora,especialistaID:data.especialistaID,})
    
    if(verifyConsulta === null){
      const consulta = await this.consultaRepository.create(data)
      return consulta;
    }else{
      console.error("Tem consulta marcada nesse horario");
    }
    
  }

}