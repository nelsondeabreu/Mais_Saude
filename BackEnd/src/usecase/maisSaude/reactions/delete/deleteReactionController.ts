import { DeleteReactionUseCase } from "./deleteReactionUseCase";




export class DeleteReactionController{

  constructor (private deleteReactionUseCase:DeleteReactionUseCase){}

  handle(id:string){
    return this.deleteReactionUseCase.execute(id)
  }
}