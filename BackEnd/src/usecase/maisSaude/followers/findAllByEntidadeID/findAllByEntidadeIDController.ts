import { FindAllByEntidadeIDUseCase } from "./findAllByEntidadeIDUseCase";



export class FindAllByEntidadeIDController{

  constructor(private findAllByEntidadeIDUseCase:FindAllByEntidadeIDUseCase){}

  handle(entidadeID:string){
    try{
      return this.findAllByEntidadeIDUseCase.execute(entidadeID)
    }catch(error){
      return console.error({message:"erro na busca de seguidores",error});
      
    }
  }
}