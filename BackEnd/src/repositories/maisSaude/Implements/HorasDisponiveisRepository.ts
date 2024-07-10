import { prismaDB1 } from "../../../database";
import { HorasDisponiveis } from "../../../generated/client1";
import { IHorasDisponiveisDTO, IHorasDisponiveisRepository } from "../IHorasDisponiveisRepository";



export class HorasDisponiveisRepository implements IHorasDisponiveisRepository{
  
  deleteHourByEspecialistID(especialistaID: string): void {
     prismaDB1.horasDisponiveis.deleteMany({
      where:{
        especialistaID
      }
    })
  }
  
  async deleteHour(id: string): Promise<HorasDisponiveis> {
    const deleteHour = await prismaDB1.horasDisponiveis.delete({
      where:{id}
    })

    return deleteHour
  }
  
  async getHorasDisponiveisByEspecialistaId(especialistaID: string): Promise<HorasDisponiveis[]> {
    const horasDisponiveis = await prismaDB1.horasDisponiveis.findMany({
      where:{
        especialistaID
      },
      include:{diasDisponiveis:true},
      orderBy:{hora:"asc"}
    })
    return horasDisponiveis
  }
  
  async findByHour(hora: string): Promise<HorasDisponiveis | null> {
        
    const hourAlredyExist = await prismaDB1.horasDisponiveis.findFirst({
      where:{hora}
    })
    
    return hourAlredyExist
  
  }
  
  async addHour(data: IHorasDisponiveisDTO): Promise<HorasDisponiveis> {
    const addHour = await prismaDB1.horasDisponiveis.create({
      data,
      include:{diasDisponiveis:true}
    })

    return addHour
  }

  async listHours(): Promise<HorasDisponiveis[]> {
    const allHours = await prismaDB1.horasDisponiveis.findMany({
      include:{diasDisponiveis:true}
    })

    return allHours;
  }

}