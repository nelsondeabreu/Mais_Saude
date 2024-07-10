import { Consulta } from "../../../../generated/client1";
import { UpdateStatusUseCase } from "./updateStatusUseCase";
import { Request,Response } from "express";


export class UpdateStatusController{

  constructor(private updateStatusUseCase:UpdateStatusUseCase){}

   async handle(request:Request,response:Response){
    try{
      const update = await this.updateStatusUseCase.execute(request.body.id,request.body.status)
      return response.status(200).json(update)
    }catch(error){
      return response.status(404).json({message:"Erro ao atualizar status",error})
    }
  }
}