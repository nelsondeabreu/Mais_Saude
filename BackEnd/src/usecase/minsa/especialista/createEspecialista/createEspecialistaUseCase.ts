import { IEspecialistaMinsaDTO } from "../../../../repositories/minsa/IEspecialistasRepository";
import { EspecialistasRepository } from "../../../../repositories/minsa/implements/EspecialistasRepository";



export class CreateEspecialistaUseCase {

  constructor(private especialistaRepository: EspecialistasRepository){}

  async execute(data: IEspecialistaMinsaDTO) {
    
    const especialista = await this.especialistaRepository.create(data);
    return especialista; 
  }
}