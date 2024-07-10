import { FindAllByCnpjUseCase } from "./findAllByCnpjUseCase";
import { Request, Response } from "express";


export class FindAllByCnpjWebController {

  constructor(private findAllByCnpjUseCase: FindAllByCnpjUseCase){}

  async handle(request:Request,response:Response){
    console.log(request.body.cnpj);
    
    try{
      const user = await this.findAllByCnpjUseCase.execute(request.body.cnpj)
      console.log(user);
      
      return response.status(200).json(user)
    }catch(error){
      return response.status(400).json({message:"Erro ao encontrar o usuario pelo ID", error})
    }
  }
}