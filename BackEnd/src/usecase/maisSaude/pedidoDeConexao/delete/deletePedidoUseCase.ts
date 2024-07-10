import { PedidoDeConexaoRepository } from "../../../../repositories/maisSaude/Implements/PedidoDeConexaoRepository";


export class DeletePedidoUseCase {
  constructor(private pedidoDeConexaoRepository:PedidoDeConexaoRepository){}

  async execute(id:string){
    return this.pedidoDeConexaoRepository.delete(id)
  }
}