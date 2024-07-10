import { FindByCrmUseCase } from "./findByCrmSocketUseCase";
import { Request, Response } from "express";


export class FindByCrmSocketController {

  constructor (private findByCrmUseCase: FindByCrmUseCase){}

  async handle(crm:string){

    try{
      return this.findByCrmUseCase.execute(crm)
    }
    catch(error){
      return console.error({message:"Especialista não cadastrado",error})
    }    

  } 
}