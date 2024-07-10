import { ListMyConnectionUseCase } from "./listMyConnectionsUseCase";
import { Request, Response } from "express";


export class ListMyConnectionController{

  constructor(private listMyConnectionsUseCase: ListMyConnectionUseCase){}

  async handle(request:Request, response:Response){
    console.log(request.body.userID);
    
    try{
      const getMyConnections = await this.listMyConnectionsUseCase.execute(request.body.userID)
      return response.status(200).json(getMyConnections)
    }catch(error){
      return response.status(404).json({message:"Erro ao listar conexoes", error})
    }
  }
} 