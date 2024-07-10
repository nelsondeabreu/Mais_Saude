import { prismaDB1 } from "../../../database";
import { PedidoDeConexao } from "../../../generated/client1";
import { IPedidoDeConexaoDTO, IPedidoDeConexaoRepository } from "../IPedidoDeConexao";


export class PedidoDeConexaoRepository implements IPedidoDeConexaoRepository{
  
  delete(id: string): Promise<PedidoDeConexao> {
    return prismaDB1.pedidoDeConexao.delete({
      where:{id}
    })
  }
  
  findPedido(data: IPedidoDeConexaoDTO): Promise<PedidoDeConexao | null> {
    return prismaDB1.pedidoDeConexao.findFirst({
      where:{
        OR:[
          {userID:data.userID, destinatarioID:data.destinatarioID},
          {userID:data.destinatarioID, destinatarioID:data.userID}
        ]
      }
    })
  }
  
  create(data: IPedidoDeConexaoDTO): Promise<PedidoDeConexao> {
    return prismaDB1.pedidoDeConexao.create({
      data
    })
  }
  
  list(userID:string): Promise<PedidoDeConexao[]> {
    return prismaDB1.pedidoDeConexao.findMany({
      where:{destinatarioID:userID},
      include:{user:true,destinatario:true},
    })
  }
  
  accept(id: string): Promise<PedidoDeConexao> {
    return prismaDB1.pedidoDeConexao.delete({
      where:{id}
    })
  }

  findByUserID (userID:string):Promise<PedidoDeConexao | null>{
    return prismaDB1.pedidoDeConexao.findFirst({
      where:{userID}
    })
  }

  findByDestinatarioID (destinatarioID:string):Promise<PedidoDeConexao[]>{
    return prismaDB1.pedidoDeConexao.findMany({
      where:{destinatarioID},
      include:{user:true}
    })
  }
}