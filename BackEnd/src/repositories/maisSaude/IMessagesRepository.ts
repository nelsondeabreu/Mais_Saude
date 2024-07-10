import { Prisma } from "@prisma/client";
import { Mensagens } from "../../generated/client1";


export interface IMessageDTO{
  conteudo?:string;
  emissorID:string;
  receptorID:string;
  visto?:boolean;
  video?:string
  foto?:string
  arquivo?:string
}

export interface IDeleteMessage{
  id:string;
  emissorID:string;
  receptorID:string;
}

export interface IMessagesRepository{
  create(data:IMessageDTO): Promise<Mensagens>
  getMessegesByEmissorIDAndReceptorID(emissorID:string,receptorID:string): Promise<Mensagens[]>
  findByEmissorID(emissorID:string): Promise<Mensagens[]>
  delete(data:IDeleteMessage):Promise<Mensagens>
  countMessages(receptorID:string,emissorID:string): Promise<number>
  updateMessageVisto(receptorID:string,emissorID:string): Promise<Prisma.BatchPayload>
  editMessage(id:string,conteudo:string): Promise<Mensagens>
}