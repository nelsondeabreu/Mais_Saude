import { IConsultas } from "../../../../repositories/maisSaude/IConsultasRepository";
import { CreateConsultaSocketUseCase } from "./createUseCase";
import { Request, Response } from "express";


export class CreateConsultaController {

  constructor(private createConsultaSocketUseCase: CreateConsultaSocketUseCase){}

  async handle (data:IConsultas){

    try{
      const consulta = await this.createConsultaSocketUseCase.execute(data)
      return consulta
    }catch(error){

      return console.error({message:"Erro ao marcarConsulta", error})
    }

  }

}