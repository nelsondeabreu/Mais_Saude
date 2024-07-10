import { MinhasConexoes } from "../../generated/client1";

export interface IMyConnectionsDTO{
  friendID:string;
  userID:string;
}

export interface IMyConnectionsRepository{

  create(data:IMyConnectionsDTO):Promise<MinhasConexoes>
  list(userID:string): Promise<MinhasConexoes[]>
  findUserAndFriend(data:IMyConnectionsDTO): Promise<MinhasConexoes | null>
  delete(id:string): Promise<MinhasConexoes>

}