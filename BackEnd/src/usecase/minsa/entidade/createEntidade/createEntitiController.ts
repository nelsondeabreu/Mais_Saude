import { CreateEntitiUseCase } from "./createEntitiUseCase";
import { Request, Response } from "express";



export class CreateEntitiController {

  constructor(private createEntitiUseCase: CreateEntitiUseCase){}

  async handle (request: Request, response: Response) {

    try {
      
      const newEntiti = await this.createEntitiUseCase.execute(request.body)
      return response.status(200).json(newEntiti);
    }
    catch (error){
      return response.status(404).json({message: "Erro ao criar entidade"});
    }
  }
}