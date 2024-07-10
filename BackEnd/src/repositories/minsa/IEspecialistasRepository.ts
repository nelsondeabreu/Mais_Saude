import { Sexo } from "../../generated/client2";
import { Especialistas } from "../../generated/client2";

export interface IEspecialistaMinsaDTO {
  
  nome: string;
  crm: string;
  sexo: Sexo;
  especialidade:string;
  entidadeID?: string;
  tipo_Da_Consulta:string;
  
}

export interface IEspecialistasRepository {
  create (data: IEspecialistaMinsaDTO): Promise<Especialistas>;
  list (): Promise<Especialistas[]>;
  findByCrm(crm:string): Promise<Especialistas | null>
}

