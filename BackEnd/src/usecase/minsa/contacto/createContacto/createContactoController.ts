import { CreateContactoUseCase } from "./createContactoUseCase";
import { Request, Response } from "express";




export class CreateContactoController {

  constructor(private createContactoUseCase: CreateContactoUseCase){}

  async handle(request: Request, response: Response) {
    console.log(request.body.numero);
    
    try {
      const newContact = await this.createContactoUseCase.execute(request.body)
      return response.status(200).json(newContact)
    }
    catch (error) {
      console.log(error);
      
      return response.status(404).json({message:"Erro ao criar contacto", error})
    }
  }
}