import { FindByCrmUseCase } from "./findByCrmUseCase";
import { Request, Response } from "express";


export class FindByCrmController {

  constructor (private findByCrmUseCase: FindByCrmUseCase){}

  async handle(request:Request, response:Response){

    try{
      const foundEspecialist = await this.findByCrmUseCase.execute(request.body.crm)
      return response.status(200).json(foundEspecialist)
    }
    catch(error){
      return response.status(404).json("Especialista não cadastrado")
    }    
    

  } 
}