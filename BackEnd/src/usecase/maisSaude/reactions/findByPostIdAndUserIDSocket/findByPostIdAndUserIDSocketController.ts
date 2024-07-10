import { FindByPostIdAndUserIDSocketUseCase } from "./findByPostIdAndUserIDSocketUseCase";

export class FindByPostIdAndUserIDSocketController{

  constructor (private findByPostIdAndUserIDSocketUseCase:FindByPostIdAndUserIDSocketUseCase){}

  async handle(postId:string,userId:string){
    try{
      return this.findByPostIdAndUserIDSocketUseCase.execute(postId,userId)
    }catch(error){
      return console.error({message:"Erro ao encontrar reacao",error});
    }
  }
}