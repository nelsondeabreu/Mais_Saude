import { CountFollowersUseCase } from "./countFollowersUseCase";


export class CountFollowersController{

  constructor(private countFollowersUseCase: CountFollowersUseCase){}

  handle(entidadeID:string){
    try{
      return this.countFollowersUseCase.execute(entidadeID)
    }catch(error){
      return console.error({message:"Erro ao contar seguidores",error});
    }
  }
}