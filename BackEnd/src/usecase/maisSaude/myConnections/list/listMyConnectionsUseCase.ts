import { IMyConnectionsRepository } from "../../../../repositories/maisSaude/IMyConnectionsRepository";


export class ListMyConnectionUseCase {
    constructor(private myConnectionsRepository: IMyConnectionsRepository){}
    
    async execute(userID:string){
      return this.myConnectionsRepository.list(userID)
    }
}