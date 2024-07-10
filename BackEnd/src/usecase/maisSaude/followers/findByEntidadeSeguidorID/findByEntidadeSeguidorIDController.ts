import { FindByEntidadeSeguidorIDUseCase } from "./findByEntidadeSeguidorIDUseCase";



export class FindByEntidadeSeguidorIDController{

  constructor(private findByEntidadeSeguidorIDUseCase:FindByEntidadeSeguidorIDUseCase){}

  handle(entidadeID:string,seguidorID:string){
    try{
      return this.findByEntidadeSeguidorIDUseCase.execute(entidadeID,seguidorID)
    }catch(error){
      return console.error({message:"erro na busca de seguidores",error});
    }
  }
}