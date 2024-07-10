import { AddCrmUseCase } from "./addCrmUseCase";
import { Request, Response } from "express";



export class AddCrmWebController {

  constructor(private addCrmUseCase: AddCrmUseCase){}

  async handle(crm:string,id:string){

    try{
      return this.addCrmUseCase.execute(id,crm)
    }
    catch(erro) {
      return console.error({message:"Crm já exite",erro})
    }
    
  }
}