import { CreateMyConnectionsUseCase } from "./createMyConnectionsUseCase";
import { Request,Response } from "express";

export class CreateMyConnectionsController {

  constructor(private createMyConnectionsUseCase: CreateMyConnectionsUseCase){}

  async handle (request:Request, response:Response){
    try{
      const createConnection = await this.createMyConnectionsUseCase.execute(request.body)
      return response.status(200).json(createConnection);
    }
    catch(error){
      return response.status(404).json({message:"Erro ao criar conexão",})
    }
  }
}