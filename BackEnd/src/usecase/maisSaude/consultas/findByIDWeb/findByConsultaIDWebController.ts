import { FindByConsultaIDWebUseCase } from "./finByConsultaIDWebUseCase";
import { Request,Response } from "express-serve-static-core";

export class FindByConsultaIDWebController{
  constructor(private findByConsultaIDUseCase: FindByConsultaIDWebUseCase){}

  async handle(request:Request,response:Response){
    try{
      const consulta = await this.findByConsultaIDUseCase.execute(request.body.id)
      return response.status(200).json(consulta)
    }catch(error){
      return response.status(404).json({message:"Erro ao achar consulta",error})
    }
  }
}