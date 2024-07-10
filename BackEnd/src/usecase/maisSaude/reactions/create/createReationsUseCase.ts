import { IReationsDTO, IReationsRepository } from "../../../../repositories/maisSaude/IReactionsRepository";
import { ReactionsRepository } from "../../../../repositories/maisSaude/Implements/ReactionsRepository";

export class CreateReactionsUseCase{

  constructor(private reactionsRepository:IReationsRepository){}

  async execute(data:IReationsDTO){
      
      const found = await this.reactionsRepository.findByPostIDAndUserID(data.postId,data.userId)
      
      if(!found){
        return this.reactionsRepository.create(data)
      }else{
        return this.reactionsRepository.updateType(data.type,found.id)
      }
  }
}