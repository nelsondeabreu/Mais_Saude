import { FindAllByCnpjUseCase } from "./findAllByCnpjUseCase";
import { Request, Response } from "express";


export class FindAllByCnpjController {

  constructor(private findAllByCnpjUseCase: FindAllByCnpjUseCase){}

  async handle(cnpj:string){
    try{
      const user = await this.findAllByCnpjUseCase.execute(cnpj)
      return user
    }catch(error){
      return console.error({message:"Erro ao encontrar o usuario pelo ID", error})
    }
  }
}