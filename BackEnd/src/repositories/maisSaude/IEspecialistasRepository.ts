import { Especialistas, Sexo } from "../../generated/client1";


export interface IEspecialistaDTO {
  
  nome: string;
  especialidade: string;
  crm: string;
  entidadeID?: string;
  sexo: Sexo;
  tipo_De_Consulta:string

}

export interface IAddValue {
  id:string;
  valor:string;
}

export interface IEspecialistasRepository {
  create (data: IEspecialistaDTO): Promise<Especialistas>;
  list (): Promise<Especialistas[]>;
  findByCrm(crm:string): Promise<Especialistas | null>
  findByEspeciality(especialidade:string): Promise<Especialistas[]>
  findByName(name:string): Promise<Especialistas[]>
  addValueConsult(data:IAddValue): Promise<Especialistas>
  deleteByCrm(crm:string): Promise<Especialistas>
  blocked(crm:string,bloqueado:string): Promise<Especialistas>
  despedir(crm:string,entidadeID:string): Promise<Especialistas>
}
