import { Seguidores } from "../../generated/client1";


export interface IFollowersDTO{
  seguidorID:string;
  entidadeID:string;

}

export interface IFollowersRepository{
  create(data:IFollowersDTO): Promise<Seguidores>
  findAllByEntidadeID(entidadeID:string): Promise<Seguidores[]>
  count(entidadeID:string): Promise<number>
  findByEntidadeSeguidorID(entidadeID:string,seguidorID:string): Promise<Seguidores | null>
  delete(id:string): Promise<Seguidores>

}