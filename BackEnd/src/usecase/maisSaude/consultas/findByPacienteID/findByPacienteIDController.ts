import { FindByPacienteIDUseCase } from "./findByPacienteIDUseCase";
import { Request, Response } from "express";



export class FindByPacienteController {

  constructor (private findByPacienteIDUseCase:FindByPacienteIDUseCase){}

  async handle(request:Request, response:Response) {

    try{
      const founConsulta = await this.findByPacienteIDUseCase.execute(request.body.pacienteID)
      return response.status(200).json(founConsulta)
    }catch(error){
      return response.status(404).json({message:"Erro ao achar consulta do especialista", error})
    }
  }
}