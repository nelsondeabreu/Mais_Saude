import { DeleteAllUseCase } from "./deleteAllUseCase";
import { Request, Response } from "express";



export class DeleteAllController {

  constructor(private deleteAllUseCase: DeleteAllUseCase){}

  async handle(request: Request, response: Response) {
    
    try {
      await this.deleteAllUseCase.execute();
      return response.status(200).send("Eliminados com sucesso")
    }
    catch(error) {
      return response.status(404).send({error,message:"ERRO AO ELIMINAR"})

    }
  }
}