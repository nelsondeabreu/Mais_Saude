import { FindByEspecialityUseCase } from "./findByEspecialityUseCase";
import { Request, Response } from "express";


export class FindByEspecialityController {

  constructor (private findByEspecialityUseCase: FindByEspecialityUseCase){}

  async handle(request:Request, response:Response){
    
    try{
    console.log(request.body.especialidade);

      const foundEspecialist = await this.findByEspecialityUseCase.execute(request.body.especialidade)
      return response.status(200).json(foundEspecialist)
    }
    catch(error){
      return response.status(404).json("Especialista não cadastrado")
    }    
    
  } 
}