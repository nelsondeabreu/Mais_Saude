import { prismaDB1 } from "../../../database";
import { Reacoes } from "../../../generated/client1";
import { IReationsDTO, IReationsRepository } from "../IReactionsRepository";


export class ReactionsRepository implements IReationsRepository{
  
  findWithAll(data: IReationsDTO): Promise<{ id: string; postId: string; userId: string; type: string; createdAt: Date; } | null> {
    return prismaDB1.reacoes.findFirst({
      where:{
        postId:data.postId,
        userId:data.userId,
        type:data.type
      }
    })
  }
  
  updateType(type: string, id: string): Promise<{ id: string; postId: string; userId: string; type: string; createdAt: Date; }> {
    return prismaDB1.reacoes.update({
      where:{
        id
      },
      data:{type}
    })
  }
  
  delete(id: string): Promise<{ id: string; postId: string; userId: string; type: string; createdAt: Date; }> {
    return prismaDB1.reacoes.delete({
      where:{id}
    })
  }
  
  findByPostIDAndUserID(postId: string, userId: string): Promise<Reacoes | null> {
    return prismaDB1.reacoes.findFirst({
      where:{
        postId,
        userId
      }
    })
  }
  
  create(data: IReationsDTO): Promise<Reacoes> {
    return prismaDB1.reacoes.create({
      data
    })
  }
  
  findByPostID(postId: string): Promise<number> {
    return prismaDB1.reacoes.count({
      where:{postId},
    })
  }

}