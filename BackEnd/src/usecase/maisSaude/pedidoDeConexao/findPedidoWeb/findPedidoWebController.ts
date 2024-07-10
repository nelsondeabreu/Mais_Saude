import { IPedidoDeConexaoDTO } from "../../../../repositories/maisSaude/IPedidoDeConexao";
import { FindPedidoWebUseCase } from "./findPedidoWebUseCase";
import { Request,Response } from "express";


export class FindPedidoWebController {

  constructor(private findPedidoWebUseCase:FindPedidoWebUseCase){}

  async handle(request:Request,response:Response){
    try{  
      const res = await this.findPedidoWebUseCase.execute(request.body)
      return response.status(200).json(res)
    }catch(error){
      return response.status(404).json({message:"Erro na procura do pedido",error});
    }
  }
}