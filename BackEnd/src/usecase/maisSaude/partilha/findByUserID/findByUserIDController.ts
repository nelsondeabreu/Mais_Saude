import { FindByUserIDUseCase } from "./findByUserIDUseCase";
import { Request,Response } from "express";

export class FindByUserIDController{

  constructor(private findByUserIDController:FindByUserIDUseCase){}

  async handle(request:Request,response:Response){

    try{
      const req= await this.findByUserIDController.execute(request.body.userID)
      return response.status(200).json(req)
    }catch(error){
      return response.status(400).json({message:"Erro ao hsbd",error})
    }
  }
}