import { contacto } from "../../generated/client2"


export interface IContatoDTO {
  numero: string;
  id_entitie: string;
}

export interface IContactoRepository {
  create(data: IContatoDTO): Promise<contacto>
  list(): Promise<contacto[]>
}