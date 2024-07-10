import { FindByCnpjUseCase } from "./findByCnpjUseCase";
import { Request, Response } from "express";


export class FindByCnpjController {

  constructor(private findByCnpjUseCase: FindByCnpjUseCase){}

  async handle (request: Request, response: Response) {
    
    try{
      const entidade = await this.findByCnpjUseCase.execute(request.body.cnpj);
      return response.status(200).json(entidade);
    }
    catch(error){
      return response.status(404).json("erro grave no cnpj");
    }
  }
}