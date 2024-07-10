import { EditContactoUseCase } from "./editContactoUseCase";
import { Request, Response } from "express";


export class EditContactoController {

  constructor (private editContactoUseCase: EditContactoUseCase){}

  async handle(request: Request, response: Response){

    try{
      const edit = await this.editContactoUseCase.execute(request.body.id, request.body)
      return response.status(200).json(edit)
    }
    catch(error){
      return response.status(404).json({message:"Erro ao editar contacto", error})
    }
    
  }
}