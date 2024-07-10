import { parse } from "date-fns";
import { prismaDB1 } from "../../../database";
import { DiasDisponiveis } from "../../../generated/client1";
import { IDiasDisponiveisDTO, IDiasDisponiveisRepository } from "../IDiasDisponiveisRepository";


export class DiasDisponiveisRepository implements IDiasDisponiveisRepository {
  
  delete(especialistaID: string): void {
     prismaDB1.diasDisponiveis.deleteMany({
      where:{
        especialistaID
      }
    })
  }
  
  async findByEspecialistID(especialistaID: string): Promise<DiasDisponiveis[]> {

    const find = await prismaDB1.diasDisponiveis.findMany({
      where:{especialistaID},
      include:{horasDisponiveis:true}
    })
    
    return find
  }
  
  async findByDay(data:IDiasDisponiveisDTO): Promise<DiasDisponiveis | null> {
    const find = await prismaDB1.diasDisponiveis.findFirst({
      where: {
        date:data.date,
        especialistaID:data.especialistaID
      },
      include:{horasDisponiveis:true,especialista:true}
    })

    return find
  }
  
  async addDay(data: IDiasDisponiveisDTO): Promise<DiasDisponiveis> {
    
    const add = await prismaDB1.diasDisponiveis.create({
      data:{
        date:data.date,
        especialistaID:data.especialistaID,
      },
      include:{especialista:true,horasDisponiveis:true},

    })
    
    return add
  }

  async list(): Promise<DiasDisponiveis[]> {
    const allDays = await prismaDB1.diasDisponiveis.findMany({
      include:{especialista:true,horasDisponiveis:true}
    })
    return allDays
  }

}