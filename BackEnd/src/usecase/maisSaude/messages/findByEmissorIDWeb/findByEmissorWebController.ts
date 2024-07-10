import { FindMessageByEmissorWebIDUseCase } from "./findByEmissorIDWebUseCase";
import { Request,Response } from "express";

export class FindMessageByEmissorIDWebController {

  constructor(private findByEmissorIDUseCase: FindMessageByEmissorWebIDUseCase){}

  async handle(request:Request,response:Response){
    try{
      const req = await this.findByEmissorIDUseCase.execute(request.body.emissorID)
      return response.status(200).json(req)
    }catch(error){
      return response.status(400).json({message:"Erro ao procurar suas mensagens"});
    }
  }
}