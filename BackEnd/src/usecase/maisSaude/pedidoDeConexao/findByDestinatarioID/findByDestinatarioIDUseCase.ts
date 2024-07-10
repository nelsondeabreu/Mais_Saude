import { PedidoDeConexaoRepository } from "../../../../repositories/maisSaude/Implements/PedidoDeConexaoRepository";



export class FindByDestinatarioIDUseCase {

  constructor(private pedidoRepository:PedidoDeConexaoRepository){}

  execute(destinatarioID:string){
    return this.pedidoRepository.findByDestinatarioID(destinatarioID)
  }
}