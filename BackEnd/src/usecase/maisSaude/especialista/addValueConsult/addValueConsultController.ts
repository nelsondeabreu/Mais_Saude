import { AddValueConsultUseCase } from "./addValueConsultUseCase";
import { Request, Response } from "express";



export class AddValueConsultController {

  constructor(private addValueConsultUseCase: AddValueConsultUseCase){}

  async handle(request:Request, response:Response){
    try{
      const add = await this.addValueConsultUseCase.execute(request.body)
      return response.status(200).json(add)
    }catch(error){
      return response.status(200).json({message:"Erro ao adiciona"})
    } 
  }
}