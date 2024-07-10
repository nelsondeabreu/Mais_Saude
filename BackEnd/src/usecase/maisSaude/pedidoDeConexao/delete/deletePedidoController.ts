import { DeletePedidoUseCase } from "./deletePedidoUseCase";




export class DeletePedidoController {

  constructor(private deletePedidoUseCase:DeletePedidoUseCase){}

  async handle(id:string){
    try{
      return this.deletePedidoUseCase.execute(id)
    }catch(error){
      return console.error({message:"Erro ao deletar pedido"},error); 
    }
  }
}