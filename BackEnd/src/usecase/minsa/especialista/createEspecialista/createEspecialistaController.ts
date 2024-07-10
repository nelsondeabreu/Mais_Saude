import { CreateEspecialistaUseCase } from "./createEspecialistaUseCase";
import { Request, Response } from "express";



export class CreateEspecialistasController {

  constructor(private createEsepcialistaUseCase: CreateEspecialistaUseCase){}

  async handle (request: Request, response: Response) {
    console.log(request.body);
    
    try{
      const especialista = await this.createEsepcialistaUseCase.execute(request.body);
      return response.status(200).json(especialista)
    }
    catch (error) {
      return response.status(404).json({message:"Erro ao cadastrar um especialista", error})
    }
  }
}