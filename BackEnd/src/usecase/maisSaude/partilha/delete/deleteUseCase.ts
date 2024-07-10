import { ShareRepository } from "../../../../repositories/maisSaude/Implements/IShareRepository";



export class DeleteShareUseCase {

  constructor(private shareRepository: ShareRepository){}

  execute(id:string){
    return this.shareRepository.delete(id)
  }
}