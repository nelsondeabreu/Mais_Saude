import { GetCallByIDUseCase } from "./getCallByIDUseCase";
import { Request,Response } from "express";



export class GetCallByIDController {

  constructor (private getCallByIDUseCase: GetCallByIDUseCase){}

  async handle(request:Request,response:Response){
    try{
      const get = await this.getCallByIDUseCase.execute(request.body.id)
      return response.status(200).json(get)
    }catch(error){
      return response.status(404).json({message:"chamada não encontrada",error})
    }
  }
}