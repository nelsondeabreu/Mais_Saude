import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";
import { FindByEspecialistaIDUseCase } from "./findByEspecialistaIDUseCase";
import { Request, Response } from "express";



export class FindByEspecialistaController {

  constructor (private findByEspecialistaIDUseCase:FindByEspecialistaIDUseCase){}

  async handle(request:Request, response:Response) {

    try{
      const {especialistaID,status} = request.body
      console.log(especialistaID,status,"DAODSDS");
      
      const foundConsulta = await this.findByEspecialistaIDUseCase.execute(especialistaID,status)
      return response.status(200).json(foundConsulta)
    }catch(error){
      return response.status(404).json({message:"Erro ao achar consulta do especialista", error})
    }
  }
}