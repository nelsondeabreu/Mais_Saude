import { Request, Response } from "express";
import { FindByIDUseCase } from "./findByIDUseCase";


export class FindByIDController {

  constructor(private findByidUseCase: FindByIDUseCase){}

  async handle (request: Request, response: Response) {
    
    try{
      const entidade = await this.findByidUseCase.execute(request.body.id);
      return response.status(200).json(entidade);
    }
    catch(error){
      return response.status(404).json("erro grave no cnpj");
    }
  }
}