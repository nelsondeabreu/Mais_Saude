import { ICommentsRepository } from "../../../../repositories/maisSaude/ICommentsRepository";
import { FindByPostIdSocketUseCase } from "./findByPostIdSocketUseCase";



export class FindByPostIdSocketController{

  constructor(private findByPostIdSocketUseCase: FindByPostIdSocketUseCase){}

  handle(postID:string){
    try{
      return this.findByPostIdSocketUseCase.execute(postID)
    }catch(error){
      return console.error(error);
    }
  }
}