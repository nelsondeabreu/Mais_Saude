import { ListPedidoDeConexaoUseCase } from "./listPedidoDeConexaoUseCase";


export class ListPedidoDeConexaoController {

  constructor(private listPedidoDeConexaoUseCase: ListPedidoDeConexaoUseCase){}

  async handle(userID:string){

    try{
      const getMy = await this.listPedidoDeConexaoUseCase.execute(userID)
      return getMy
    }catch(error){
      return console.error({message:"Erro ao listar pedidos de conexão",error})
    }
  }
}