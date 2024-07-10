import { EditPostUseCase } from "./editPostUseCase";
import { Request,Response } from "express";


export class EditPostController {

  constructor(private editPostUseCase:EditPostUseCase){}

  async handle(request:Request,response:Response){

    try{
      const edit = await this.editPostUseCase.execute(request.body.postID,request.body.conteudo)
      return response.status(200).json(edit)
    }catch(error){
      return response.status(400).json({message:"Erro na edição",error})
    }
  }
}