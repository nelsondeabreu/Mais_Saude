import { FindByConsultaIDUseCase } from "./finByConsultaIDUseCase";



export class FindByConsultaIDController{
  constructor(private findByConsultaIDUseCase: FindByConsultaIDUseCase){}

  handle(id:string){
    return this.findByConsultaIDUseCase.execute(id)
  }
}