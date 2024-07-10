import { Consultas } from "../../generated/client1";
import { Consulta } from "../../generated/client1";

export interface IConsultas {
  tipo_Da_Consulta:string;
  data:Date;
  hora:string;
  especialistaID:string;
  pacienteID: string;
  status:Consulta;
}

export interface IDayHour{
  data:Date;
  hour:string;
  especialistaID:string;
}
export interface IConsultasRepository{
  create (data:IConsultas): Promise<Consultas>
  findByEspecialistID(especialistaID: string,status:Consulta): Promise<Consultas []>
  findByPacienteID(pacienteID: string): Promise<Consultas[]>
  findByPacienteIDStatus(pacienteID: string,status:Consulta): Promise<Consultas[]>
  findByID(id: string): Promise<Consultas | null>
  findByDayAndHour(data:IDayHour): Promise<Consultas | null>
  updateStatus(id:string,status:Consulta): Promise<Consultas>
}

