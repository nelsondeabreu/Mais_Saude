import { ShareRepository } from "../../../../repositories/maisSaude/Implements/IShareRepository";
import { ListShareUseCase } from "./listShareUseCase";
import { Request,Response } from "express-serve-static-core";


export class ListShareController{

  constructor(private listShareUseCase: ListShareUseCase){}

  async handle(request:Request,response:Response){
    try{
      const req = await this.listShareUseCase.execute()
      return response.status(200).json(req)
    }catch(error){
      return response.status(400).json({message:"Erro ao listar partilhas",error})
    }
  }
}