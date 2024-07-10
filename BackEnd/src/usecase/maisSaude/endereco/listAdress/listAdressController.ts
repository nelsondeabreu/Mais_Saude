import { ListAdressUseCase } from "./listAdressUseCase";
import { Response, Request } from "express";



export class ListAdressController {

  constructor (private listAdressUseCase: ListAdressUseCase){}

  async handle(request: Request, response: Response){

    try{
      const allAdress =  await this.listAdressUseCase.execute();
      return response.status(200).json(allAdress);
    }
    catch (error){
      return response.status(404).json({message:"Erro ao listar enderecos do sistema", error})
    }    
  }
}