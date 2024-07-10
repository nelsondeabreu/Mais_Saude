import { AddCrmUseCase } from "./addCrmUseCase";
import { Request, Response } from "express";



export class AddCrmController {

  constructor(private addCrmUseCase: AddCrmUseCase){}

  async handle(request:Request, response:Response){

    try{
      const {crm,id} = request.body
      const updateCrm = await this.addCrmUseCase.execute(crm,id)
      return response.status(200).json(updateCrm)
    }
    catch(erro) {
      response.status(200).json("Crm já exite")
    }
    
  }
}