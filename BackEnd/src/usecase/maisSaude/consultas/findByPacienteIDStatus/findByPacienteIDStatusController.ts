import { FindByPacienteIDStatusUseCase } from "./findByPacienteIDStatusUseCase";
import { Request, Response } from "express";



export class FindByPacienteStatusController {

  constructor (private findByPacienteIDStatusUseCase:FindByPacienteIDStatusUseCase){}

  async handle(request:Request, response:Response) {

    try{
      const founConsulta = await this.findByPacienteIDStatusUseCase.execute(request.body.pacienteID,request.body.status)
      return response.status(200).json(founConsulta)
    }catch(error){
      return response.status(404).json({message:"Erro ao achar consulta do especialista", error})
    }
  }
}