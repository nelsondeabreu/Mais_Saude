import { AcceptPedidoDeConexaoUseCase, IAcceptDTO } from "./acceptPedidoDeConexaoUseCase";

export class AcceptPedidoDeConexaoController {

  constructor(private acceptPedidoDeConexaoUseCase: AcceptPedidoDeConexaoUseCase){}

  async handle(data:IAcceptDTO){

    try{
      const accepted = await this.acceptPedidoDeConexaoUseCase.execute(data)
      return accepted
    }catch(error){
      return console.error({message:"Erro ao aceitar o pedido",error})
    }
  }
}