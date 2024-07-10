import { IFollowersRepository } from "../../../../repositories/maisSaude/IFollowersRepository";



export class FindByEntidadeSeguidorIDWebUseCase{

  constructor(private followersRepository:IFollowersRepository){}

  execute(entidadeID:string,seguidorID:string){
    return this.followersRepository.findByEntidadeSeguidorID(entidadeID,seguidorID)
  }
}