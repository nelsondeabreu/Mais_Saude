import { Request, Response } from "express";
import { LogUserUseCase } from "./logUserUseCase";


export class LogUserController {

  constructor(private logUserUseCase: LogUserUseCase){}

  async handle(request: Request, response: Response) {
    try{
      const userLoggerd = await this.logUserUseCase.execute(request.body)
      if(userLoggerd === "Erro"){
        return response.status(400).json({message:"Email ou senha invalida"})
      }else{
        return response.status(200).json(userLoggerd)
      }
    }catch(error){
      return response.status(400).json({message:"Email ou senha invalida",error})
    }
  }

   /*async getProfile(request: Request, response: Response) {
    
    return response.json(request.user)
}*/

}