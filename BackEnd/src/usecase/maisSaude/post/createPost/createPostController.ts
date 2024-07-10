import { Request, Response } from "express";
import { CreatePostUseCase } from "./createPostUseCase";




export class CreatePostController {

  constructor(private createPostUseCase: CreatePostUseCase){}

  async handle(request: Request, response: Response) {
    
    try{
      if(!request.file){
         
        const newPost = await this.createPostUseCase.execute(request.body)
        return response.status(200).json(newPost)
        
      }else{
          if(request.file.mimetype.startsWith("image")){
            
            const {originalname} = request.file
            request.body.foto = originalname.toString()
            const newPost = await this.createPostUseCase.execute(request.body)
            return response.status(200).json(newPost)
          }else{

            const {originalname} = request.file
            request.body.video = originalname.toString()
            const newPost = await this.createPostUseCase.execute(request.body)
            return response.status(200).json(newPost)
          }          
          
      }
      
    }
    catch {
      return response.status(400).json("Erro grave")
      
    }
  }

}