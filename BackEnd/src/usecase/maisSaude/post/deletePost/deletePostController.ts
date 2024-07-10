import { PostRepository } from "../../../repositories/maisSaude/Implements/PostRepository";
import { DeletePostUseCase } from "./deletePostUseCase";
import { Request, Response } from "express";



export class DeletePostController {
  
  constructor(private deletePostUseCase: DeletePostUseCase){}

  async handle (request: Request, response: Response) {
    try{
      const deletePost = await this.deletePostUseCase.execute(request.body.postID)      
      return response.status(200).json("Eliminado com sucesso")
    }catch (error) {
      return response.status(404).json(error)
    }
  }
}