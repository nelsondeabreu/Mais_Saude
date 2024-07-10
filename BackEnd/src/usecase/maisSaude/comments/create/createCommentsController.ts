import { ICommentsDTO } from "../../../../repositories/maisSaude/ICommentsRepository";
import { CreateCommentsUseCase } from "./createCommentsUseCase";



export class CreateCommentsController{

  constructor(private createCommentsUseCase: CreateCommentsUseCase){}

  handle(data:ICommentsDTO){
    try{
      return this.createCommentsUseCase.execute(data)
    }catch(error){
      return console.error({message:"Erro ao criar reacao",error});
      
    }
  }
}