import { ShareRepository } from "../../../../repositories/maisSaude/Implements/IShareRepository";



export class ListShareUseCase{

  constructor(private shareRepository:ShareRepository){}

  execute(){
    return this.shareRepository.list()
  }
}