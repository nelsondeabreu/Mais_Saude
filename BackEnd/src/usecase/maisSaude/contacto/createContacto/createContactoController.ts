import { CreateContactoUseCase } from "./createContactoUseCase";
import { Request, Response } from "express";



export class CreateContactoController {

  constructor(private createContactoUseCase: CreateContactoUseCase){}

  async handle(request: Request, response: Response){

    try{
      const newContacto = await this.createContactoUseCase.execute(request.body)
      return response.status(200).json(newContacto)
    }
    catch(error){
      return response.status(404).json({message:"erro ao cadastrar contacto sistema"})
    }
  }
}