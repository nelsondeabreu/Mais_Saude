import { UpdateVistoUseCase } from "./updateVistoUseCase";



export class UpdateVistoController{

  constructor(private updateVistoUseCase: UpdateVistoUseCase){}

  handle(id:string){
    try{
      return this.updateVistoUseCase.execute(id)
    }catch(erro){
      return console.error({message:"Erro ao atualizar notificacao",erro})
    }
  }
}