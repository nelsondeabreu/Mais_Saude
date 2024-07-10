import { DeleteShareUseCase } from "./deleteUseCase";
import { Request,Response } from "express";


export class DeleteShareController{

  constructor(private deleteShareUseCase: DeleteShareUseCase){}

  async handle(request:Request,response:Response){
    try{
      const req = await this.deleteShareUseCase.execute(request.body.id)
      return response.status(200).json(req)
    }catch(error){
      return response.status(400).json({message:"Erro ao deletar", error})
    }
  }
}