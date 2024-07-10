import { PedidoDeConexaoRepository } from "../../../../repositories/maisSaude/Implements/PedidoDeConexaoRepository";
import { FindByDestinatarioIDUseCase } from "./findByDestinatarioIDUseCase";



export class FindByDestinatarioIDController {

  constructor(private findByDestinatarioIDUseCase:FindByDestinatarioIDUseCase){}

  handle(destinatarioID:string){
    try{
      return this.findByDestinatarioIDUseCase.execute(destinatarioID)
    }catch(error){
      return console.error({message:"Erro ao achar pedidos",error});
    }
  }
}