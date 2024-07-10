import { DiasDisponiveis } from "../../generated/client1";


export interface IDiasDisponiveisDTO{
  date: Date;
  especialistaID:string;
}

export interface IDiasDisponiveisRepository {
  addDay(data:IDiasDisponiveisDTO): Promise<DiasDisponiveis>
  findByDay(data:IDiasDisponiveisDTO):Promise<DiasDisponiveis | null>
  findByEspecialistID(especialistaID:string): Promise<DiasDisponiveis[]>
  list(): Promise<DiasDisponiveis[]>
  delete(especialistaID:string): void
}