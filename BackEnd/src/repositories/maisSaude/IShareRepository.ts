import { Partilha } from "../../generated/client1";



export interface IShareDTO{
  postShareID:string;
  userID:string;
  createPostShareID:string
}

export interface IShareRepositry {

  create(data:IShareDTO): Promise<Partilha>
  delete(id:string): Promise<Partilha>
  list(): Promise<Partilha[]>
  findByUserID(userID:string): Promise<Partilha[]>
  
}