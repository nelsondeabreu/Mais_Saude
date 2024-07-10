import { EditAdressUseCase } from "./editAdressUseCase";
import { Request, Response } from "express";


export class EditAdressController {

  constructor (private editAdressUseCase: EditAdressUseCase){}

  async handle(request:Request, response:Response) {

    try{
      const edit = await this.editAdressUseCase.execute(request.body.id,request.body)
      return response.status(200).json(edit)
    }
    catch(error) {
      return response.status(404).json({message:"Erro ao editar endereco"})
    }
  }
}