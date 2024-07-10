import { error } from "console";
import { IPedidoDeConexaoDTO, IPedidoDeConexaoRepository } from "../../../../repositories/maisSaude/IPedidoDeConexao";


export class CreatePedidoDeConexaoUseCase{

  constructor(private pedidoDeConexaoRepository: IPedidoDeConexaoRepository){}

  async execute (data:IPedidoDeConexaoDTO){

    try{

      const pedidoExist = await this.pedidoDeConexaoRepository.findPedido(data)
      console.log("paassoue aqui tbm2");
      
      if(pedidoExist){
        throw new Error("Já são amigos ou tem pedido pendente.")
      }
      console.log("paassoue aqui3");

      return this.pedidoDeConexaoRepository.create(data)
    }
    catch(error){
      console.error("Erro ao enviar pedido de conexão");      
    }
  }
}