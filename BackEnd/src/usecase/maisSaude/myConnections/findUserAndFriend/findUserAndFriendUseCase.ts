import { IMyConnectionsDTO } from "../../../../repositories/maisSaude/IMyConnectionsRepository";
import { MyConnectionsRepository } from "../../../../repositories/maisSaude/Implements/MyConnectionsRepository";



export class FindUserAndFriendUseCase {

  constructor(private myConnectiosRepository: MyConnectionsRepository){}

  async execute(data:IMyConnectionsDTO){
    return this.myConnectiosRepository.findUserAndFriend(data)
  }
}