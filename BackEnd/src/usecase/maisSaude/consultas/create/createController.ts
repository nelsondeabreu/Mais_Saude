import { CreateUseCase } from "./createUseCase";
import { Request, Response } from "express";


export class CreateController {

  constructor(private createUseCase: CreateUseCase){}

  async handle (request: Request, response: Response){

    try{
      console.log(request.body,"ojihuyg");
      
      const consulta = await this.createUseCase.execute(request.body)
      return response.status(200).json(consulta)
    }catch(error){

      return response.status(404).json({message:"Erro ao marcarConsulta", error})
    }

  }

}