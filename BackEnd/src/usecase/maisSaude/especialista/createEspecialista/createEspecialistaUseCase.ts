import { IEspecialistaDTO } from "../../../../repositories/maisSaude/IEspecialistasRepository";
import { EspecialistasRepository } from "../../../../repositories/maisSaude/Implements/EspecialistasRepository";




export class CreateEspecialistaUseCase {

  constructor(private especialistaRepository: EspecialistasRepository){}

  async execute(data: IEspecialistaDTO) {
    
    const especialista = await this.especialistaRepository.create(data);
    return especialista; 
  }
}