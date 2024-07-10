import { DeleteCommentUseCase } from "./deleteCommentUseCase";




export class DeleteCommentController{

  constructor(private deleteCommentUseCase:DeleteCommentUseCase){}

  handle(id:string){
  try{
    return this.deleteCommentUseCase.execute(id)
  }catch(error){
    return console.error({message:"Erro ao deletar comentario",error});
  }
  }
}