import { Request, Response } from "express";
import { AlterPassWordUseCase } from "./alterPasswordUseCase";
import bcrypt from "bcrypt"

export class AlterPasswordController {

  constructor(private alterPasswordUseCase: AlterPassWordUseCase){}

  async handle(request:Request,response:Response){
    try{
      const {id,newPassword} = request.body
      const hasPass = request.body.newPassword = bcrypt.hash(newPassword, 10)
      const alterPassword = await this.alterPasswordUseCase.execute(id,newPassword,hasPass)
      return response.status(200).json(alterPassword)
    }catch(error){
      return response.status(404).json({message:"Erro ao alter senha", error})
    }
  }
}