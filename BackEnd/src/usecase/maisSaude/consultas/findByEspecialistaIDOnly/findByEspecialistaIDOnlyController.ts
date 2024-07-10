import { FindByEspecialistaIDOnlyUseCase } from "./findByEspecialistaIDOnlyUseCase";
import { Request, Response } from "express";



export class FindByEspecialistaOnlyController {

  constructor (private findByEspecialistaIDOnlyUseCase:FindByEspecialistaIDOnlyUseCase){}

  async handle(request:Request, response:Response) {
      
    try{
      const {especialistaID} = request.body
      const foundConsulta = await this.findByEspecialistaIDOnlyUseCase.execute(especialistaID)
      return response.status(200).json(foundConsulta)
    }catch(error){
      return response.status(404).json({message:"Erro ao achar consulta do especialista", error})
    }
  }
}