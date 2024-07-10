import { IPedidoDeConexaoRepository } from "../../../../repositories/maisSaude/IPedidoDeConexao";



export class ListPedidoDeConexaoWebUseCase {

  constructor(private pedidoDeConexaoRepository: IPedidoDeConexaoRepository){}

  async execute(userID:string){
    return this.pedidoDeConexaoRepository.list(userID)
  }
}