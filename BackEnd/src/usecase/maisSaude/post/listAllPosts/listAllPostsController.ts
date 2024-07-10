import { PostRepository } from "../../../repositories/maisSaude/Implements/PostRepository";
import { Request, Response } from "express";
import { ListAllPostsUseCase } from "./listAllPostsUseCase";




export class ListAllPostsController {
  
  constructor(private listAllPostsUseCase: ListAllPostsUseCase){}

  async handle (request: Request, response: Response) {
    const allPosts = await this.listAllPostsUseCase.execute();

    return response.status(200).json(allPosts)
  }
}