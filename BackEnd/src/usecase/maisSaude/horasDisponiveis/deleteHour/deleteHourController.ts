import { DeleteHourUseCase } from "./deleteHourUseCase";
import { Request, Response } from "express";


export class DeleteHourController {

  constructor(private deleteHourUseCase:DeleteHourUseCase){}

  async handle ( request:Request, response:Response){

    try{
      const deleteHour = await this.deleteHourUseCase.execute(request.body.id)
      return response.status(200).json(deleteHour)
    }catch(err){
      return response.status(404).json({message:"Erro ao deletar",err})
    }
  }
}