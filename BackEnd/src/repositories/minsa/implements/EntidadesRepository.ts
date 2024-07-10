import { IEntidadesRepository, IRequestDTO } from "../IEntidadesRepository";
import { prismaDB2 } from "../../../database";
import { Entidades } from "../../../generated/client2";



export class EntidadesMinsaRepository implements IEntidadesRepository {
  
  async create(data: IRequestDTO): Promise<Entidades> {
    
    const entidade = await prismaDB2.entidades.create({
      data,
    })


    return entidade
  }

  async list(): Promise<Entidades[]> {
    const allEntities = await prismaDB2.entidades.findMany()
    return allEntities
  }

  async findByCnpj(cnpj: string): Promise<Entidades | null> {
    
    const entidade = await prismaDB2.entidades.findUnique({
      where: {cnpj},
      include:{contacto:true,endereco:true}
    })
    return entidade
  }
  

}