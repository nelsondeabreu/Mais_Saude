import { CountWebCommentsUseCase } from "./countWebCommentsUseCase";
import { Request,Response } from "express";


export class CountWebCommentsController{

  constructor(private countWebCommentsUseCase: CountWebCommentsUseCase){}

  async handle(request:Request,response:Response){
    try{
      const count = await this.countWebCommentsUseCase.execute(request.body.postID)
      return response.status(200).json(count)
    }catch(error){
      return response.status(400).json({message:"Erro na contagem",error});
    }
  }
}