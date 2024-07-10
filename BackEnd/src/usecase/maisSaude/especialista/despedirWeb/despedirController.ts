import { DespedirUseCase } from "./despedirUseCase";
import { Response, Request } from "express";


export class DespedirController{

  constructor(private despedirUseCase: DespedirUseCase){}

  async handle(req:Request,res:Response){
    try{
      const del = this.despedirUseCase.execute(req.body.crm,req.body.entidadeID)
      return res.status(200).json(del) 
    }catch(Error){
      return res.status(400).json({message:"Erro ao despedir especialista", Error})
    }
  }
}