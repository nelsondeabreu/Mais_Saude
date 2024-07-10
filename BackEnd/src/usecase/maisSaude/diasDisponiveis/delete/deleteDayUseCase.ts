import { DiasDisponiveisRepository } from "../../../../repositories/maisSaude/Implements/DiasDisponiveisRepository";


export class DeleteDayUseCase{
  
  constructor(private diasDisponiveisRepository:DiasDisponiveisRepository){}

  execute(especialistaID:string){
    return this.diasDisponiveisRepository.delete(especialistaID)
  }
}