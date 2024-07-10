import { IShareDTO } from "../../../../repositories/maisSaude/IShareRepository";
import { ShareRepository } from "../../../../repositories/maisSaude/Implements/IShareRepository";



export class CreatePartilhaUseCase{
  constructor(private partilhaRepository:ShareRepository){}

  execute(data:IShareDTO){
    return this.partilhaRepository.create(data)
  }
}