import { Notificacoes } from "../../generated/client1";

export interface INotificationDTO{
  usuarioID:string;
  consultaID:string;
  tipo:string;
  destinatarioID:string
  postID:string
  visto?:string
}

export interface INotificationsRepository{
  create (data:INotificationDTO): Promise<Notificacoes>
  findByUserID(usuarioID:string): Promise<Notificacoes[]>
  findByUserReceiverID(data:INotificationDTO): Promise<Notificacoes | null>
  countNotificationNoRead(usuarioID:string): Promise<number>
  delete(id:string): Promise<Notificacoes>
  findByUserIDtoEspecialist(destinatarioID:string): Promise<Notificacoes[]>
  alterVisto(id:string): Promise<Notificacoes>
}