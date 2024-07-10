import { IMyConnectionsRepository } from "../../../../repositories/maisSaude/IMyConnectionsRepository";




export class DeleteMyConnectionUseCase {

  constructor(private myConnectionRepository:IMyConnectionsRepository){}

  async execute(id:string){
    return this.myConnectionRepository.delete(id)
  }
}