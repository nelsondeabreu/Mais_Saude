import { Consulta } from "../../../../generated/client1";
import { ConsultasRepository } from "../../../../repositories/maisSaude/Implements/ConsultasRepository";
import { FindByEspecialistaIDSocketUseCase } from "./findByEspecialistaIDUseCase";
import { Request, Response } from "express";



export class FindByEspecialistaIDSocketController {

  constructor (private findByEspecialistaIDUseCase:FindByEspecialistaIDSocketUseCase){}

  async handle(especialistaID:string,status:Consulta) {

    try{
      const foundConsulta = await this.findByEspecialistaIDUseCase.execute(especialistaID,status)
      return foundConsulta
    }catch(error){
      return console.error({message:"Erro ao achar consulta do especialista", error})
    }
  }
}