import { Sexo } from "@prisma/client";
import { Usuarios } from "../../generated/client1";

export interface IuserDTO {
  name:string,
  email: string,
  senha: string,
  sexo:Sexo,
  nascimento:Date,
}

export interface IUserEditDTO {
  id:string,
  name:string,
  email: string,
  sobre: string,
  nascimento:Date,
}

export interface Iuser {
  email: string;
  senha: string;
}

interface IUserRepository {
  createUser (user: IuserDTO): Promise<Usuarios>;
  findByEmail (email: string): Promise<Usuarios | null>
  findByCrm (crm:string): Promise<Usuarios | null> 
  findByName (name:string): Promise<Usuarios[]> 
  findByCnpj (cnpj:string): Promise<Usuarios | null> 
  findAllByCnpj (cnpj:string): Promise<Usuarios[]> 
  listUsers(): Promise<Usuarios[] >
  findById (id: string): Promise<Usuarios | null>
  findByIdSocket (id: string): Promise<Usuarios | null>
  addCnpj(cnpj:string,id:string): Promise<Usuarios |null>;
  addCrm(crm:string,id:string): Promise<Usuarios | null>;
  addImage(foto:string, id:string): Promise<Usuarios>  
  edit(data: IUserEditDTO): Promise<Usuarios>
  alterPassword(id:string,newPassword:string): Promise<Usuarios>;
  addSocketID(id:string,socketID:string): Promise<Usuarios>
}

export {IUserRepository}