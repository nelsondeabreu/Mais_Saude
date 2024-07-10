import { FindByDayAndHourUseCase } from "./findByDayAndHourUseCase";
import { Request,Response } from "express";


export class FindByDayAndHourController{

  constructor(private findByDayAndHourUseCase:FindByDayAndHourUseCase){}

  async handle(request:Request,response:Response){
    try{
      const req = await this.findByDayAndHourUseCase.execute(request.body)
      return response.status(200).json(req)
    }catch(error){
      return response.status(400).json({message:"Erro ao achar",error})
    }
  }
}