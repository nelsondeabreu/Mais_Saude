import { CountCommentsUseCase } from "./countCommentsUseCase";



export class CountCommentsController{

  constructor(private countCommentsUseCase: CountCommentsUseCase){}

  handle(postId:string){
    try{
      return this.countCommentsUseCase.execute(postId)
    }catch(error){
      return console.error({message:"Erro na contagem",error});
    }
  }
}