import { ListUseCase } from "./listUseCase";
import { Request, Response } from "express";




export class ListController {
  
  constructor(private listUseCase: ListUseCase){}

  async handle(request: Request, response: Response){

    try{
      const allEntities = await this.listUseCase.execute();
      return response.status(200).json(allEntities);
    }
    catch(error){
      return response.status(404).json({message:"Erro ao listar as entidades",error})
    }
  }

}