import { IFollowersRepository } from "../../../../repositories/maisSaude/IFollowersRepository";



export class FindAllByEntidadeIDUseCase{

  constructor(private followersRepository:IFollowersRepository){}

  execute(entidadeID:string){
    return this.followersRepository.findAllByEntidadeID(entidadeID)
  }
}