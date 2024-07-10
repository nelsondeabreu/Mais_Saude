import { IFollowersRepository } from "../../../../repositories/maisSaude/IFollowersRepository";


export class CountFollowersUseCase{

  constructor(private followersRepository: IFollowersRepository){}

  execute(entidadeID:string){
    return this.followersRepository.count(entidadeID)
  }
}