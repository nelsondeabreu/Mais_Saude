import { prismaDB1 } from "../../../database";
import { IFollowersDTO, IFollowersRepository } from "../IFollowersRepository";



export class FollowersRepository implements IFollowersRepository{
 
  delete(id: string): Promise<{ id: string; seguidorID: string; entidadeID: string; }> {
    return prismaDB1.seguidores.delete({
      where:{id}
    })
  }
  
  findByEntidadeSeguidorID(entidadeID: string, seguidorID: string): Promise<{ id: string; seguidorID: string; entidadeID: string; } | null> {
    return prismaDB1.seguidores.findFirst({
      where:{entidadeID,seguidorID}
    })
  }
  
  create(data: IFollowersDTO): Promise<{ id: string; seguidorID: string; entidadeID: string; }> {
    return prismaDB1.seguidores.create({
      data
    })
  }

  findAllByEntidadeID(entidadeID: string): Promise<{ id: string; seguidorID: string; entidadeID: string; }[]> {
    return prismaDB1.seguidores.findMany({
      where:{
        entidadeID
      },
      include:{seguidor:true}
    })
  }

  count(entidadeID: string): Promise<number> {
    return prismaDB1.seguidores.count({
      where:{
        entidadeID
      }
    })
  }

}