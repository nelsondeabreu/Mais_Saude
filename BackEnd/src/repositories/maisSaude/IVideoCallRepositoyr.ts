import { VideoCall } from "../../generated/client1";

export interface IVideoCallDTO{
  emissor:string;
  destinatario:string;
  offer?:any;
  answer?:any;
}

export interface IVideoCallRepository {
  create(data:IVideoCallDTO): Promise <VideoCall>
  getCallByID(id:string): Promise <VideoCall | null>
}