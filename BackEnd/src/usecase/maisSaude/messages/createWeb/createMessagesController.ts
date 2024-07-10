import { IMessageDTO } from "../../../../repositories/maisSaude/IMessagesRepository";
import { CreateMessagesUseCase } from "./createMessagesUseCase";
import { Request,Response } from "express";

export class CreateMessagesController{

  constructor(private createMessagesUseCase:CreateMessagesUseCase){}

   async handle(request:Request,response:Response){
    try{
      if(!request.file){
        const newMessage = await this.createMessagesUseCase.execute(request.body)
        return response.status(200).json(newMessage)
      }else{
        if(request.file.mimetype.startsWith("image")){
          const {originalname} = request.file
          request.body.foto = originalname.toString()
          console.log(originalname.toString(),"fotooo");
          
          const newMessage = await this.createMessagesUseCase.execute(request.body)
          return response.status(200).json(newMessage)
        }else if(request.file.mimetype.startsWith("video")){
          const {originalname} = request.file
          request.body.video = originalname.toString()
          const newMessage = await this.createMessagesUseCase.execute(request.body)
          return response.status(200).json(newMessage)
        }else if(request.file.mimetype.startsWith("application/pdf")){
          const {originalname} = request.file
          request.body.arquivo = originalname.toString()
          const newMessage = await this.createMessagesUseCase.execute(request.body)
          return response.status(200).json(newMessage)
        } 
      }
    }catch(erro){
      return console.error({message:"Erro ao mandar mensagem",erro});
    }
  }
}