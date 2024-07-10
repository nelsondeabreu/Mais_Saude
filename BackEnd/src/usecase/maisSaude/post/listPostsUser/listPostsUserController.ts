import { Request,Response } from "express";
import { ListPostsUserUseCase } from "./listPostsUserUseCase";

export class ListPostsUserController {

  constructor (private listPostsUserUseCase:ListPostsUserUseCase){}

  async handle(request:Request,response:Response){
    try{
      const res = await this.listPostsUserUseCase.execute(request.body.userID)
    }catch(error){
      return response.status(400).json({message:"Erro ao buscar pesquisas do user", error})
    }
  }
}