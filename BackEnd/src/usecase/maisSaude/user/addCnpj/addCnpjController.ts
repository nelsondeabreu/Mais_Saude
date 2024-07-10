import { AddCnpjUseCase } from "./addCnpjUseCase";
import { Request, Response } from "express";



export class AddCnpjController {

  constructor(private addCnpjUseCase: AddCnpjUseCase){}

  async handle(request:Request , response: Response) {
    const {cnpj, id} = request.body;
    
    try{
      
      const add = await this.addCnpjUseCase.execute(id,cnpj)

      return response.status(200).json(add)
    }
    catch (error){
      return response.status(200).json({error, message:"Erro ao atualizar"})
    }
  }
}