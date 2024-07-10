import { request } from "http";
import { FindByPostIDUseCase } from "./findByPostIDUseCase";
import { Request,Response } from "express";


export class FindByPostIdAndUserIDController{

  constructor (private findByPostIDUseCase:FindByPostIDUseCase){}

  async handle(request:Request,response:Response){
    try{
      const req = await this.findByPostIDUseCase.execute(request.body.postID)
      return response.status(200).json(req)
    }catch(error){
      return console.error({message:"Erro ao buscar post",error});
    }
  }
}