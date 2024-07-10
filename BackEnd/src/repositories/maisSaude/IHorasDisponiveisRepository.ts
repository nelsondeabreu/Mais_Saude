import { HorasDisponiveis } from "../../generated/client1";



export interface IHorasDisponiveisDTO{
  hora:string;
  diasDisponiveisID:string;
  especialistaID: string;
}

export interface IHorasDisponiveisRepository {
  addHour(data:IHorasDisponiveisDTO):Promise<HorasDisponiveis>
  findByHour(hora:string):Promise<HorasDisponiveis | null>
  getHorasDisponiveisByEspecialistaId(especialistaID:string): Promise<HorasDisponiveis[]>
  deleteHour(id:string): Promise<HorasDisponiveis>
  deleteHourByEspecialistID(especialistaID:string): void
  listHours(): Promise<HorasDisponiveis[]>
}