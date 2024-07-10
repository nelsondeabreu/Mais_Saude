import { prismaDB2 } from "../../../database";
import { Especialistas } from "../../../generated/client2";
import { IEspecialistaMinsaDTO, IEspecialistasRepository } from "../IEspecialistasRepository";



export class EspecialistasRepository implements IEspecialistasRepository {
  
  findByCrm(crm: string): Promise<Especialistas | null> {
    return prismaDB2.especialistas.findUnique({
      where:{crm}
    })
  }
  
  async create(data: IEspecialistaMinsaDTO): Promise<Especialistas> {
    const especialista = await prismaDB2.especialistas.create({
      data,
      include:{entitie:true}
    })

    return especialista
  }
  
  async list(): Promise<Especialistas[]> {

    const allEspecialistas = await prismaDB2.especialistas.findMany();

    return allEspecialistas;

  }


}