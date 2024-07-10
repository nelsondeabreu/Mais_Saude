import { GetHorasDisponiveisUseCase } from "./getHorasDisponiveisUseCase";
import { Request, Response } from "express";


export class GetHorasDisponiveisController {

  constructor(private getHorasDisponiveisUseCase: GetHorasDisponiveisUseCase){}

  async handle (request:Request, response:Response){
    try{
      const horasDisponiveis = await this.getHorasDisponiveisUseCase.execute(request.body.especialistaID)
      return response.status(200).json(horasDisponiveis)
    }catch(error){
      return response.status(404).json({message:"Nem1 hora encontrada", error})
    }
  }
}