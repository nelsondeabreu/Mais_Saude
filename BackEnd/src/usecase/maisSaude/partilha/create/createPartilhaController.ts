import { Request,Response } from "express";
import { CreatePartilhaUseCase } from "./createPartilhaUseCase";


export class CreatePartilhaController {

  constructor(private createPartilhaUseCase:CreatePartilhaUseCase){}
  async handle(request:Request,response:Response){
    try{
      const req = await this.createPartilhaUseCase.execute(request.body)
      return response.status(200).json(req)
    }catch(error){
      return response.status(400).json({message:"Erro ao partilhar",error})
    }
  }
}