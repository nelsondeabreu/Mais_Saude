import { PedidoDeConexao } from "../../generated/client1";



export interface IPedidoDeConexaoDTO {
  userID:string;
  destinatarioID:string;
}


export interface IPedidoDeConexaoRepository{
  create(data:IPedidoDeConexaoDTO): Promise<PedidoDeConexao>
  list(userID:string): Promise<PedidoDeConexao[]>
  accept(id:string): Promise<PedidoDeConexao>
  findByUserID(userID:string): Promise<PedidoDeConexao | null>
  findByDestinatarioID(destinatarioID:string): Promise<PedidoDeConexao[]>
  findPedido(data:IPedidoDeConexaoDTO): Promise<PedidoDeConexao| null>
  delete(id:string): Promise<PedidoDeConexao>
}