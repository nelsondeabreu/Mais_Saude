import { EditMessageUseCase } from "./editMessageUseCase";



export class EditMessageController{

  constructor(private editMessageUseCase:EditMessageUseCase){}

  handle(id:string,conteudo:string){
    try{
      return this.editMessageUseCase.execute(id,conteudo)
    }catch(error){
      console.error({message:"Erro ao atualizar mensagem",error});
    }
  }
}