import { FindByPostIdAndUserIDUseCase } from "./findByPostIdAndUserIDUseCase";
import { Request,Response } from "express";


export class FindByPostIdAndUserIDController{

  constructor (private findByPostIdAndUserIDUseCase:FindByPostIdAndUserIDUseCase){}

  async handle(request:Request,response:Response){
    try{
      const req = await this.findByPostIdAndUserIDUseCase.execute(request.body.postID,request.body.userID)
      return response.status(200).json(req)
    }catch(error){
      return console.error({message:"Erro ao encontrar reacao",error});
    }
  }
}