import { Reacoes } from "../../generated/client1";

export interface IReationsDTO{
  postId:string;
  userId:string;
  type:string
}

export interface IReationsRepository{
  create(data:IReationsDTO): Promise<Reacoes>
  findByPostID(postId:string): Promise<number>
  findByPostIDAndUserID(postId:string,userID:string): Promise<Reacoes | null  >
  delete(id:string): Promise<Reacoes>
  updateType(type:string,id:string): Promise<Reacoes>
  findWithAll(data:IReationsDTO): Promise<Reacoes | null>
}