import { Request, Response } from "express";
import bcrypt from "bcrypt"
import { CreateUserUseCase } from "./createUserUseCase";
import { Usuarios } from "../../../../generated/client1";



export class CreateUserController {


  constructor(private createUserUseCase: CreateUserUseCase) {}

 async handle (request:Request, response: Response) {
    const {name,email,senha,nascimento,sexo} = request.body;
    const hasPass = request.body.senha = bcrypt.hash(senha, 10)

    const newuser = await this.createUserUseCase.execute({name,email,senha,nascimento,sexo},hasPass)
    
    return response.status(200).json(newuser)
  }
  
}