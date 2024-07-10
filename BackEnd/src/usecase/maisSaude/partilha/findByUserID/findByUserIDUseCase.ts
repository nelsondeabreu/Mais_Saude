import { ShareRepository } from "../../../../repositories/maisSaude/Implements/IShareRepository";



export class FindByUserIDUseCase{

  constructor(private shareRepository: ShareRepository){}

  execute(userID:string){
    return this.shareRepository.findByUserID(userID)
  }
}