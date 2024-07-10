import { ListPedidoDeConexaoWebUseCase } from "./listPedidoDeConexaoWebUseCase";
import { Request,Response } from "express";

export class ListPedidoDeConexaoWebController {

  constructor(private listPedidoDeConexaoWebUseCase: ListPedidoDeConexaoWebUseCase){}

  async handle(request:Request,response:Response){

    try{
      const getMy = await this.listPedidoDeConexaoWebUseCase.execute(request.body.userID)
      return response.status(200).json(getMy)
    }catch(error){
      return response.status(404).json({message:"Erro ao listar pedidos", error})
    }
  }
}