import { Request,Response } from "express";
import { prisma } from "../../../database";
import { UserRepository } from "../../../repositories/maisSaude/Implements/UserRepository";
import { VerifyTokenUseCase } from "./VerifyTokenUseCase";



export class VerifyTokenController {

  constructor(private verifyTokenUseCase: VerifyTokenUseCase){}

  async handle (request: Request, response: Response) {
    const {token} = request.body

    const tokenExist = await this.verifyTokenUseCase.execute(token)
    console.log();
    
    if(tokenExist){
      return response.status(200).send("Existe")
    }

    return response.status(404).send("Nem já")
  }
}