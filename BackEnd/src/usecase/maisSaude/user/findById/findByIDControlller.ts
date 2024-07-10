import { rmSync } from "fs";
import { FindByIDUseCase } from "./findByIDUseCase";
import { Request, Response } from "express";


export class FindByIDController {

  constructor(private findByIDUseCase: FindByIDUseCase){}

  async handle(request:Request,response:Response){
    try{
      console.log(request.body.id);
      
      const user = await this.findByIDUseCase.execute(request.body.id)
      console.log(user);
      
      return response.status(200).json(user)
    }catch(error){
      return response.status(400).json({message:"Erro ao encontrar o usuario pelo ID", error})
    }
  }
}