import { FindByDayUseCase } from "./findByDayUseCase";
import { Request,Response } from "express";



export class FindByDayController {

  constructor(private findByDayUseCase: FindByDayUseCase){}

  async handle(request:Request , response:Response){
    try{
      console.log(request.body.especialistaID,"é ele");
      
      const foundDay = await this.findByDayUseCase.execute(request.body)
      return response.status(200).json(foundDay)
    }catch(error){
      return response.status(404).json({message:"Erro ao achar o date", error})
    }
  }

}