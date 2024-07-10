import { Consulta } from "../../../../generated/client1";
import { UpdateStatusUseCase } from "./updateStatusUseCase";



export class UpdateStatusController{

  constructor(private updateStatusUseCase:UpdateStatusUseCase){}

   handle(id:string,status:Consulta){
      return this.updateStatusUseCase.execute(id,status)
  }
}