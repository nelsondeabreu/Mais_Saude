import { Entidades } from "@prisma/client"
import { prismaDB2 } from "../../database"

export interface IRequestDTO {
  name: string;
  cnpj: string;
  type: string;
  email:string;
  id_endereco: string;
}

export interface IEntidadesRepository {
  
  create (data: IRequestDTO): Promise<Entidades>;
  findByCnpj (cnpj: string):  Promise<Entidades | null>;
  list(): Promise<Entidades[]>;

}