import { FindByCrmUseCase } from "./findByCrmUseCase";
import { Request, Response } from "express";


export class FindByCrmMinsaSocketController {

  constructor (private findByCrmUseCase: FindByCrmUseCase){}

  async handle(crm:string){

    try{
      return this.findByCrmUseCase.execute(crm)
    }
    catch(error){
      return console.error("Especialista não cadastrado")
    }    
  } 
}