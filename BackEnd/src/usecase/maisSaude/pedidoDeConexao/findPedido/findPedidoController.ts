import { IPedidoDeConexaoDTO } from "../../../../repositories/maisSaude/IPedidoDeConexao";
import { FindPedidoUseCase } from "./findPedidoUseCase";



export class FindPedidoController {

  constructor(private findPedidoUseCase:FindPedidoUseCase){}

  async handle(data:IPedidoDeConexaoDTO){
    try{  
      return this.findPedidoUseCase.execute(data)
    }catch(error){
      
      return console.error({message:"Erro na procura do pedido",error});
      
    }
  }
}