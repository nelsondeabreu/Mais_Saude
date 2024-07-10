import { AddDayUseCase } from "./addDayUseCase";
import { Request, Response } from "express";



export class AddDayController {

  constructor(private addDayUseCase:AddDayUseCase){}

  async handle(request:Request, response:Response){

    try{
      const addDay = await this.addDayUseCase.execute(request.body)
      
      return response.status(200).json(addDay)
    }catch(error){
      return response.status(404).json({message:"Erro ao adicionar dia", error})
    }
  }
}