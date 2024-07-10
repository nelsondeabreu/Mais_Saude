import { EditCommentUseCase } from "./editCommentUseCase";



export class EditCommentController{

  constructor(private editCommentUseCase:EditCommentUseCase){}

  handle(id:string,conteudo:string){
    try{
      return this.editCommentUseCase.execute(id,conteudo)
    }catch(error){
      return console.error({message:"Erro ao editar comentario",error});
    }
  } 
}