import { prismaDB1 } from "../../../database";
import { $Enums, Consulta, Consultas } from "../../../generated/client1";
import { IConsultas, IConsultasRepository,IDayHour } from "../IConsultasRepository";


export class ConsultasRepository implements IConsultasRepository{
  
  findByPacienteIDStatus(pacienteID: string, status: Consulta): Promise<Consultas[]> {
    return prismaDB1.consultas.findMany({
      where:{pacienteID,status},
      include:{especialista:true},
  
    })
  }
 
  updateStatus(id:string,status: Consulta): Promise<Consultas> {
    return prismaDB1.consultas.update({
      where:{id},
      data:{status}
    })
  }
  
  findByID(id: string): Promise<Consultas | null> {
    return prismaDB1.consultas.findUnique({
      where:{id}
    })
  }
  
  findByDayAndHour(data:IDayHour): Promise<Consultas | null> {
    return prismaDB1.consultas.findFirst({
      where:{
        data:data.data,
        hora:data.hour,
        especialistaID:data.especialistaID
      }
    })
  }
  
   findByEspecialistID(especialistaID: string,status:Consulta): Promise<Consultas[]> {
    return prismaDB1.consultas.findMany({
      where:{especialistaID,status},
      include:{usuario:true}
    })

  }

   findByEspecialistIDOnly(especialistaID: string): Promise<Consultas[]> {
    return prismaDB1.consultas.findMany({
      where:{especialistaID},
      include:{usuario:true}
    })

  }

   findByPacienteID(pacienteID: string): Promise<Consultas[]> {
    return prismaDB1.consultas.findMany({
      where:{pacienteID},
      include:{especialista:true}
    })

  }

  
  
   create(data: IConsultas): Promise<Consultas> {
    return prismaDB1.consultas.create({
      data
    })
  }
  
}