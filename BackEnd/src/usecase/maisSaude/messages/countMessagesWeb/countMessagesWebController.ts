import { CountMessagesUseCase } from "./countMessagesWebUseCase";
import { Request,Response } from "express";


export class CountMessagesWebController {

  constructor( private countMessageUseCase: CountMessagesUseCase){}

  async handle(request:Request,response:Response){
    try{
      const req = await this.countMessageUseCase.execute(request.body.emissorID,request.body.receptorID)
      return response.status(200).json(req)
    }catch(error){
      return response.status(400).json({message:"ERRO NO SERVIDOR DE CONTAGEM",error});
    }
  }
}