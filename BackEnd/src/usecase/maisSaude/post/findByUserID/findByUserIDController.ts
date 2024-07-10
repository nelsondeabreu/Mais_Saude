import { FindByUserIDUseCase } from "./findByUserIDUseCase";
import { Request,Response } from "express";


export class FindByUserIDController{
  constructor(private findByUserIDUseCase:FindByUserIDUseCase){}

  async handle(request:Request,response:Response){
    try{
      const res = await this.findByUserIDUseCase.execute(request.body.userID)
      return response.status(200).json(res)
    }catch(error){
      return response.status(400).json({message:"Erro ao buscar post",error})

    }
    
  }
}