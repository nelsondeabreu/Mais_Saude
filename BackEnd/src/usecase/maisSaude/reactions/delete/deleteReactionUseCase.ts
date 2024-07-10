import { ReactionsRepository } from "../../../../repositories/maisSaude/Implements/ReactionsRepository";


export class DeleteReactionUseCase{

  constructor(private reactionsRepository: ReactionsRepository){}

  execute(id:string){
    return this.reactionsRepository.delete(id)
  }
}