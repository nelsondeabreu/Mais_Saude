import { Request, Response } from "express";
import { FindByIDUseCase } from "./findByIDSocketUseCase";


export class FindByIDSocketController {

  constructor(private findByidUseCase: FindByIDUseCase){}

  async handle (id:string) {
    
    try{
      return this.findByidUseCase.execute(id);
    }
    catch(error){
      return console.error("erro grave no cnpj");
    }
  }
}