import { CreateAdressUseCase } from "./CreateAdressUseCase";
import { Request, Response } from "express";



export class CreateAdressController {

  constructor(private createAdressUseCase: CreateAdressUseCase){}

  async handle(request: Request, response: Response) {

    try{
      const newAdress = await this.createAdressUseCase.execute(request.body.adress)
      return response.status(200).json(newAdress);
    }
    catch(error) {
      return response.status(404).json({message:"erro ao cadastrar endereco", error})
    }
  }
}