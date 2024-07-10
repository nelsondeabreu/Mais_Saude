import { IReationsDTO } from "../../../../repositories/maisSaude/IReactionsRepository";
import { CreateReactionsUseCase } from "./createReationsUseCase";


export class CreateReactionsController {

  constructor(private createReactionsUseCase: CreateReactionsUseCase){}

  handle(data:IReationsDTO){
    try{
      return this.createReactionsUseCase.execute(data)
    }catch(error){
      return console.log(error);
    }
  }
  
}