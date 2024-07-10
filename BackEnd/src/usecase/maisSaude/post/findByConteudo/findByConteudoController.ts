import { FindByConteudoUseCase } from "./findByConteudoUseCase";
import { Request,Response } from "express";


export class FindByConteudoController{
  constructor(private findByConteudoUseCase:FindByConteudoUseCase){}

  async handle(request:Request,response:Response){
    try{
      const res = await this.findByConteudoUseCase.execute(request.body.conteudo)
      return response.status(200).json(res)
    }catch(error){
      return response.status(400).json({message:"Erro ao buscar post",error})

    }
    
  }
}