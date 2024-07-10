import { prismaDB1 } from "../../../database";
import { Comentarios } from "../../../generated/client1";
import { ICommentsDTO, ICommentsRepository } from "../ICommentsRepository";


export class CommentsRepository implements ICommentsRepository{
  
  edit(id: string, conteudo: string): Promise<Comentarios> {
    return prismaDB1.comentarios.update({
      where:{id},
      data:{conteudo}
    })
  }

  delete(id: string): Promise<Comentarios> {
    return prismaDB1.comentarios.delete({
      where:{id}
    })
  }
  
  count(postId: string): Promise<number> {
    return prismaDB1.comentarios.count({
      where:{postId}
    })
  }
  
  findByPostID(postId: string): Promise<Comentarios[]> {
    return prismaDB1.comentarios.findMany({
      where:{postId},
      include:{autor:true}
    })
  }
  
  create(data: ICommentsDTO): Promise<Comentarios> {
    return prismaDB1.comentarios.create({
      data
    })
  }

}