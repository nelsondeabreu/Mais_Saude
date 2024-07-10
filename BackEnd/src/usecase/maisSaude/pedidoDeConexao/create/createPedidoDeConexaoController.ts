import { IPedidoDeConexaoDTO } from "../../../../repositories/maisSaude/IPedidoDeConexao";
import { CreatePedidoDeConexaoUseCase } from "./createPedidoDeConexaoUseCase";

export class CreatePedidoDeConexaoController {

  constructor(private createPedidoDeConexaoUseCase: CreatePedidoDeConexaoUseCase){}

  async handle(data:IPedidoDeConexaoDTO){
    
    try{
      const create = await this.createPedidoDeConexaoUseCase.execute(data)
      return create
    }catch(Error){
      return "Erro"
    }
  }
}