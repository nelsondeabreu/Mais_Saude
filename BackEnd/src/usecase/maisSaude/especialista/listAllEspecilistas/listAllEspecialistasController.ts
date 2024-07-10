import { ListAllEspecialistasUseCase } from "./listAllEspecialistasUseCase";
import { Request, Response } from "express";



export class ListAllEspecialistasController {

  constructor(private listAllEspecialistasUseCase: ListAllEspecialistasUseCase){}

  async handle (request: Request, response: Response){

    const allEspecialistas = await this.listAllEspecialistasUseCase.execute();
    
    return response.status(200).json(allEspecialistas);
    
  }
}