import { CountUseCase } from "./countUseCase";


export class CountController{

  constructor(private countUseCase:CountUseCase){}

  handle(postID:string){
    try{
      return this.countUseCase.execute(postID)
    }catch(error){
      return console.error(error);
    }
  }
}