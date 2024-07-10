import { DeleteHourUseCase } from "./deleteHourUseCase";
import { Request, Response } from "express";


export class DeleteHourByEspecialistaIDController {

  constructor(private deleteHourUseCase:DeleteHourUseCase){}

  async handle (especialistaID:string){

    try{
      return this.deleteHourUseCase.execute(especialistaID)
    }catch(err){
      return console.error({message:"Erro ao deletar",err})
    }
  }
}