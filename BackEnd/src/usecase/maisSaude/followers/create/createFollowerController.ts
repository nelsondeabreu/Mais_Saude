import { IFollowersDTO } from "../../../../repositories/maisSaude/IFollowersRepository";
import { CreateFollowerUseCase } from "./createFollowerUseCase";



export class CreateFollowerController{

  constructor(private createFollowerUseCase:CreateFollowerUseCase){}

  handle(data:IFollowersDTO){
    try{
      return this.createFollowerUseCase.execute(data)
    }catch(error){
      return console.error({message:"Erro ao seguir",error});
      
    }
  }
}