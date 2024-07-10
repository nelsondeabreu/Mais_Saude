import { ListHoursUseCase } from "./listHoursUseCase";
import { Request, Response } from "express";




export class ListHoursController {

  constructor (private listHoursUseCase: ListHoursUseCase){}

  async handle(request:Request, response:Response){

    try{
      const getAllHours = await this.listHoursUseCase.execute()
      return response.status(200).json(getAllHours)
    }catch(error){
      return response.status(404).json({message:"Erro ao lista horas", error})
    }
  }
}