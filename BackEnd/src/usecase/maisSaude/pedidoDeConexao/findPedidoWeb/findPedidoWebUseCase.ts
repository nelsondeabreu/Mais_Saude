import { PedidoDeConexao } from "../../../../generated/client1";
import { IPedidoDeConexaoDTO } from "../../../../repositories/maisSaude/IPedidoDeConexao";
import { PedidoDeConexaoRepository } from "../../../../repositories/maisSaude/Implements/PedidoDeConexaoRepository";



export class FindPedidoWebUseCase {

  constructor(private pedidoDeConexaoRepository:PedidoDeConexaoRepository){}

  async execute(data:IPedidoDeConexaoDTO){
    return this.pedidoDeConexaoRepository.findPedido(data)
  }
}