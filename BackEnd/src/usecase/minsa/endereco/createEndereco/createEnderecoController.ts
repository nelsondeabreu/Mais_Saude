import { CreateEnderecoUseCase } from "./createEnderecoUseCase";
import { Request, Response } from "express";



export class CreateEnderecoController {

  constructor(private createEnderecoUseCase: CreateEnderecoUseCase){}

  async handle(request: Request, response: Response) {

    try{
      
      const newAdress = await this.createEnderecoUseCase.execute(request.body.adress)
      
      return response.status(200).json({
        newAdress,
        message:"passou aqui endereco"
      })

    }
    catch(error){
      return response.status(404).json({message: "Erro ao criar"})
    }
    
  }

}