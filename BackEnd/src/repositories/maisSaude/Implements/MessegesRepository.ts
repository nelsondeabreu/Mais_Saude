import { Prisma } from "@prisma/client";
import { prismaDB1 } from "../../../database";
import { Mensagens } from "../../../generated/client1";
import { IDeleteMessage, IMessageDTO, IMessagesRepository } from "../IMessagesRepository";



export class MessegesRepository implements IMessagesRepository{
  
  editMessage(id:string,conteudo:string): Promise<Mensagens> {
    return prismaDB1.mensagens.update({
      where:{id},
      data:{conteudo}
    })
  }
  
  updateMessageVisto(receptorID: string, emissorID: string): Promise<Prisma.BatchPayload>{
    return prismaDB1.mensagens.updateMany({
      where:{
        emissorID,
        receptorID,
      },
      data:{visto:true}
    })
  }
  
  countMessages(receptorID: string,emissorID:string): Promise<number> {
    return prismaDB1.mensagens.count({
      where:{
        receptorID,
        emissorID,
        visto:false
      }
    })
  }
  
  findByEmissorID(emissorID: string): Promise<Mensagens[]> {
    return prismaDB1.mensagens.findMany({
      where:{
        OR:[
          {emissorID},
          {receptorID:emissorID}
        ]
      },
      include:{emissor:true,receptor:true}
    })
  }
  
  create(data: IMessageDTO): Promise<Mensagens> {
    return prismaDB1.mensagens.create({
      data
    })
  }
  
  getMessegesByEmissorIDAndReceptorID(emissorID: string, receptorID: string): Promise<Mensagens[]> {
    return prismaDB1.mensagens.findMany({
      where:{
        OR:[
          {emissorID:emissorID,receptorID:receptorID},
          {emissorID:receptorID,receptorID:emissorID}
        ]
      },
      include:{emissor:true,receptor:true},
      orderBy:{data:"asc"}
      
    })
  }

  delete(data: IDeleteMessage): Promise<Mensagens> {
    return prismaDB1.mensagens.delete({
      where:{
        id:data.id,
        OR:[
          {emissorID:data.emissorID,receptorID:data.receptorID},
          {emissorID:data.receptorID,receptorID:data.emissorID},
        ]
      }
    })
  }
  
}