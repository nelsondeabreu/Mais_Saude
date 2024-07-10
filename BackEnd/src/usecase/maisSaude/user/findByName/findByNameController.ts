import { FindByNameUseCase } from "./findByNameUseCase";
import { Request, Response } from "express";


export class FindByNameController {

  constructor(private findByNameUseCase: FindByNameUseCase){}

  async handle(request:Request,response:Response){
    try{
      const user = await this.findByNameUseCase.execute(request.body.name)
      return response.status(200).json(user)
    }catch(error){
      return response.status(400).json({message:"Erro ao encontrar o usuario pelo ID", error})
    }
  }
}