import { IMyConnectionsDTO, IMyConnectionsRepository } from "../../../../repositories/maisSaude/IMyConnectionsRepository";


export class CreateMyConnectionsUseCase{

  constructor(private myConnectionsRepository: IMyConnectionsRepository){

  }

  async execute(data: IMyConnectionsDTO){
    const find = await this.myConnectionsRepository.findUserAndFriend(data)
    if(!find)
      return await this.myConnectionsRepository.create(data)
    else
      return console.error("Já são amigos");
      
  }
}