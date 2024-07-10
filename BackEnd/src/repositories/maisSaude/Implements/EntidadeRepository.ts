import { prismaDB1 } from "../../../database";
import { EntidadesSistema } from "../../../generated/client1";
import { IEntidadeSitemaDTO, IEntidadeSistemRepository, IEditEntitySitemDTO } from "../IEntidadeRepository";


export class EntidadeSistemRepository implements IEntidadeSistemRepository {
  
  addImage(id: string, foto: string): Promise<EntidadesSistema> {
    return prismaDB1.entidadesSistema.update({
      where:{id},
      data:{foto}
    })
  }
  
  async create(data: IEntidadeSitemaDTO): Promise<EntidadesSistema> {
    const entity = await prismaDB1.entidadesSistema.create({
    data
    })

    return entity;
  }
  
  async list(): Promise<EntidadesSistema[]> {
    const allEntities = await prismaDB1.entidadesSistema.findMany({
      include:{contactos:true,endereco:true,especialista:true}
    })
    return allEntities;
  }

  async findByCnpj(cnpj: string): Promise<EntidadesSistema | null> {
    
    const entidade = await prismaDB1.entidadesSistema.findUnique({
      where: {cnpj},
      include:{contactos:true, endereco:true, especialista:true}
    })
    return entidade
  }

  async findByID(id: string): Promise<EntidadesSistema | null> {
    
    const entidadeExist = await prismaDB1.entidadesSistema.findUnique({
      where:{id},
      include:{contactos:true, endereco:true, especialista:true}
    })
    return entidadeExist; 

  }

  async deleteAll(): Promise<void> {
    await prismaDB1.entidadesSistema.deleteMany()
  }

  async editEntity(id: string, data: IEditEntitySitemDTO): Promise<EntidadesSistema> {
    const editEntity = await prismaDB1.entidadesSistema.update({
      where:{id},
      data
    })
    return editEntity
  }
  

} 