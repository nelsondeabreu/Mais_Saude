import { GetMessagesByEmissorIDAndReceptorUseCase } from "./getMessagesByEmissorIDAndReceptorUseCase";
import { Request,Response } from "express";


export class GetMessagesByEmissorIDAndReceptorController{

  constructor(private getMessagesByEmissorIDAndReceptorUseCase: GetMessagesByEmissorIDAndReceptorUseCase){}

  async handle(request:Request,response:Response){

    try{

      const {emissorID,receptorID} = request.body
      
      const myMessages = await this.getMessagesByEmissorIDAndReceptorUseCase.execute(emissorID,receptorID)
      return response.status(200).json(myMessages)
    }catch(Error){
      return response.status(404).json({message:"Erro ao buscar as mensagens",Error})
    }
  }
}