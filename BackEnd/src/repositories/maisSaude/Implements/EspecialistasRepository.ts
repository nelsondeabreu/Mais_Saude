import { prismaDB1 } from "../../../database";
import { $Enums, Especialistas } from "../../../generated/client1";
import { IAddValue, IEspecialistaDTO, IEspecialistasRepository } from "../IEspecialistasRepository";


export class EspecialistasRepository implements IEspecialistasRepository {
  
  despedir(crm: string, entidadeID: string): Promise<Especialistas> {
    return prismaDB1.especialistas.update({
      where:{crm},
      data:{entidadeID}
    })
  }
  
  blocked(crm: string,bloqueado:string): Promise<Especialistas> {
    return prismaDB1.especialistas.update({
      where:{crm},
      data:{
        bloqueado
      }
    })
  }
  
  deleteByCrm(crm: string): Promise<Especialistas> {
    return prismaDB1.especialistas.delete({
      where:{crm}
    })
  }
  
  findByName(nome: string): Promise<Especialistas[]> {
    
    return prismaDB1.especialistas.findMany({
      where:{
        nome:{
          contains:nome
        }
      },
      include:{entidade:true}
    })
  }
  
  async findByEspeciality(especialidade: string): Promise<Especialistas[]> {
    return prismaDB1.especialistas.findMany({
      where:{
        especialidade:{
          contains:especialidade
        }
      },
      include:{entidade:true}
    })
  }
  
  async addValueConsult(data:IAddValue): Promise<Especialistas> {

    const addVlue = await prismaDB1.especialistas.update({
      where:{id:data.id},
      data:{valor:data.valor}
    })

    return addVlue
  }
  
  
  
  async create(data: IEspecialistaDTO): Promise<Especialistas> {
    
    const especialista = await prismaDB1.especialistas.create({data})

    return especialista;
  }

  async list(): Promise<Especialistas[]> {
    
    const allEspecialistas = await prismaDB1.especialistas.findMany({
      include:{entidade:true}
    });
    return allEspecialistas;

  }

  async findByCrm(crm: string): Promise<Especialistas | null> {
    
    const foundEspecialist = await prismaDB1.especialistas.findUnique({
      where:{crm},
      include:{entidade:true,diasDisponiveis:true}
    })

    return foundEspecialist
  }

  

} 