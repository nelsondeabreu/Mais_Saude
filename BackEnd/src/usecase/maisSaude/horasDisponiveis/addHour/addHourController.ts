import { parse } from "date-fns";
import { AddHourUseCase } from "./addHourUseCase";
import { Request, Response } from "express";


export class AddHourController {

  constructor (private addHourUseCase: AddHourUseCase){}

  async handle(request:Request, response:Response){

    try{
      const addHour = await this.addHourUseCase.execute(request.body)
      return response.status(200).json(addHour)
    }catch(error){
      return response.status(404).json({message:"Erro ao adicionar hora", error})
    }
  }
}