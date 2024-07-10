import { ListContactsUseCase } from "./listContactsUseCase";
import { Request, Response } from "express";



export class ListContactsController {

  constructor(private listContactsUseCase: ListContactsUseCase){}

  async handle (request: Request, response: Response) {

    try{
      
      const allContacts = await this.listContactsUseCase.execute()
      return response.status(200).json(allContacts)

    }    
    catch(error){
      return response.status(200).json({message:"Erro ao listar contactos do sistema",error})
    }
  }
}