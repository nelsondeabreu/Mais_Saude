import { AddAdminUseCase } from "./addAdminUseCase";
import { Request, Response } from "express";



export class AddAdminController {

  constructor(private addAdminUseCase: AddAdminUseCase){}

   handle(cnpj:string,id:string) {
    
    try{
      return this.addAdminUseCase.execute(id,cnpj)
    }
    catch (error){
      return console.error({error, message:"Erro ao atualizar"})
    }
  }
}