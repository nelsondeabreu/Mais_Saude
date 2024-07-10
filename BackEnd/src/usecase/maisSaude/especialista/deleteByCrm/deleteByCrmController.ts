import { DeleteByCrmUseCase } from "./deleteByCrmUseCase";


export class DeleteByCrmController{

  constructor(private deleteByCrmUseCase:DeleteByCrmUseCase){}

  handle(crm:string){
    return this.deleteByCrmUseCase.execute(crm)
  }
}