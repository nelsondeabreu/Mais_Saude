import { IPedidoDeConexaoRepository } from "../../../../repositories/maisSaude/IPedidoDeConexao";



export class ListPedidoDeConexaoUseCase {

  constructor(private pedidoDeConexaoRepository: IPedidoDeConexaoRepository){}

  async execute(userID:string){
    return this.pedidoDeConexaoRepository.list(userID)
  }
}