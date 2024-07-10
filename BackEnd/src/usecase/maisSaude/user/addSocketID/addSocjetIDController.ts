import { AddSocketIDUseCase } from "./addSocketIDUseCase";
import { Request,Response } from "express";


export class AddSocketIDController {

  constructor (private addSocketIDUseCase:AddSocketIDUseCase){}

  async handle(id:string,socketID:string){
    
    try{
      return await this.addSocketIDUseCase.execute(id,socketID)
    }catch(error){
      return console.log(error);
      
    }
  }
}