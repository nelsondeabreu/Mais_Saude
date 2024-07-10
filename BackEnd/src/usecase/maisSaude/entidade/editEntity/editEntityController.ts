import { EditEntityUseCase } from "./editEntityUseCase";
import { Response,Request } from "express";



export class EditEntityController {

  constructor(private editEntityUseCase: EditEntityUseCase){}

  async handle(request:Request, response:Response){

    try{
      const edit = await this.editEntityUseCase.execute(request.body.id,request.body)
      return response.status(200).json(edit)
    }
    catch(error){
      return response.status(404).json({message:"Erro ao editar entidade", error})
    }
  }
}