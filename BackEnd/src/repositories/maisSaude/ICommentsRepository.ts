import { Comentarios } from "../../generated/client1";

export interface ICommentsDTO{
  postId:string;
  autorId:string;
  conteudo:string;
  
}

export interface ICommentsRepository{
  create(data:ICommentsDTO): Promise<Comentarios>
  findByPostID(postId:string): Promise<Comentarios[]>
  count(postId:string): Promise<number>
  edit(id:string,conteudo:string): Promise<Comentarios>
  delete(id:string): Promise<Comentarios>
}