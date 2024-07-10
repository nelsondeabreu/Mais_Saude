import { EntidadesSistema } from "../../generated/client1";


export interface IEntidadeSitemaDTO {
    
    name: string;
    cnpj: string;
    tipo_entidade: string;
    email: string
    enderecoID: string;

}

export interface IEditEntitySitemDTO {
    
  name: string;
  tipo_entidade: string;
  email: string;
  sobre: string;

}

export interface IEntidadeSistemRepository {

  create(data: IEntidadeSitemaDTO): Promise<EntidadesSistema>
  list(): Promise<EntidadesSistema[]>
  findByCnpj(cnpj: string): Promise<EntidadesSistema | null>
  findByID(id: string): Promise<EntidadesSistema | null>
  deleteAll(): Promise<void>
  editEntity(id:string, data:IEditEntitySitemDTO): Promise<EntidadesSistema>
  addImage(id:string,foto:string): Promise<EntidadesSistema>
}