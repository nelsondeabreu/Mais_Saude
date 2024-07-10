import { IFollowersDTO, IFollowersRepository } from "../../../../repositories/maisSaude/IFollowersRepository";


export class CreateFollowerUseCase{

  constructor(private followersRepository: IFollowersRepository){}

  async execute(data:IFollowersDTO){
    const found = await this.followersRepository.findByEntidadeSeguidorID(data.entidadeID,data.seguidorID)
    if(!found){
      return this.followersRepository.create(data)
    }else{
      return this.followersRepository.delete(found.id)
    }
  }
}