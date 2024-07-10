import { FindByNameUseCase } from "./findByNameUseCase";
import { Request, Response } from "express";


export class FindByNameController {

  constructor (private findByNameUseCase: FindByNameUseCase){}

  async handle(request:Request, response:Response){
    
    try{
      
      const foundEspecialist = await this.findByNameUseCase.execute(request.body.name)
      return response.status(200).json(foundEspecialist)
    }
    catch(error){
      return response.status(404).json("Especialista não cadastrado")
    }    
    
  } 
}