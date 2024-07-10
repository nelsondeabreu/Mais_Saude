import { FindByIDUseCase } from "./findByIDUseCase";
import { Request,Response } from "express";


export class FindByIDController{
  constructor(private findByIDUseCase:FindByIDUseCase){}

  async handle(request:Request,response:Response){
    try{
      const res = await this.findByIDUseCase.execute(request.body.id)
      return response.status(200).json(res)
    }catch(error){
      return response.status(400).json({message:"Erro ao buscar post",error})
    }
    
  }
}