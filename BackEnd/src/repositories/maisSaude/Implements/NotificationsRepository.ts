import { prismaDB1 } from "../../../database";
import { Notificacoes } from "../../../generated/client1";
import { INotificationDTO, INotificationsRepository } from "../INotificationsRepository";



export class NotificationsRepository implements INotificationsRepository {
 
  alterVisto(id:string): Promise<{ id: string; data: Date; usuarioID: string; destinatarioID: string; consultaID: string; postID: string; tipo: string; visto: string | null; }> {
    return prismaDB1.notificacoes.update({
      where:{id},
      data:{
        visto:"true"
      }
    })
  }
  
  countNotificationNoRead(destinatarioID:string): Promise<number> {
    return prismaDB1.notificacoes.count({
      where:{
        visto:"false",
        destinatarioID
      }
    })
  }
  
  delete(id: string): Promise<Notificacoes> {
    return prismaDB1.notificacoes.delete({
      where:{id}
    })
  }
  
  findByUserReceiverID(data:INotificationDTO): Promise<Notificacoes | null> {
    return prismaDB1.notificacoes.findFirst({
      where:{
        usuarioID:data.usuarioID,destinatarioID:data.destinatarioID,tipo:data.tipo 
      }
    })
  }
  
  create(data: INotificationDTO): Promise<Notificacoes> {
    return prismaDB1.notificacoes.create({
      data,
    })
  }

  findByUserID(destinatarioID: string): Promise<Notificacoes[]> {
    return prismaDB1.notificacoes.findMany({
      where:{destinatarioID},
      include:{usuarioNotificacao:true},
      orderBy:{data:"desc"}
    })
  }

  findByUserIDtoEspecialist(destinatarioID: string): Promise<Notificacoes[]> {
    return prismaDB1.notificacoes.findMany({
      where:{destinatarioID},
      include:{usuarioNotificacao:true,Post:true},
      orderBy:{data:"desc"}
    })
  }

}