import { EntidadeUseCase } from "./entidadeUseCase";
import { Request, Response } from "express";



export class EntidadeController {

  constructor(private entidadeUseCase: EntidadeUseCase){}

  async handle(request: Request, response: Response){
    const {name, cnpj, email, tipo_entidade,enderecoID} = request.body
    try {
      const newEntity = await this.entidadeUseCase.execute({name, cnpj, email, tipo_entidade,enderecoID})
      return response.status(200).json(newEntity)
    }
    catch (error) {
      return response.status(404).json(error)
    }
  }
}