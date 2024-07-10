import { EditProfileUseCase } from "./editProfileUseCase";
import { Request, Response } from "express";


export class EditProfileController {

  constructor (private editProfileUseCase: EditProfileUseCase){}
  
  async handle (request: Request, response:Response){
    
    try{
      const userEdit = await this.editProfileUseCase.execute(request.body)
      return response.status(200).json(userEdit)

    }catch(error){
      return response.status(404).json({message:"Erro ao editar",error})
    }
  }
}