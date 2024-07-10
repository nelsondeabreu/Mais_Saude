import { Contactos } from "../../generated/client1";

export interface IContatoDTO {
  contacto: string;
  entidadeID: string;
  usuarioID:string
}

export interface IContactoRepository {
  create(data: IContatoDTO): Promise<Contactos>
  list(): Promise<Contactos[]>
  edit(id:string,data: IContatoDTO): Promise<Contactos>
}