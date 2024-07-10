import { EntidadesMinsaRepository } from "../../../../repositories/minsa/implements/EntidadesRepository";
import { IRequestDTO } from "../../../../repositories/minsa/IEntidadesRepository";




export class CreateEntitiUseCase {

  constructor(private entidadeRepository : EntidadesMinsaRepository){}

  async execute (data: IRequestDTO) {
    
      const entitiAlredyExist = await this.entidadeRepository.findByCnpj(data.cnpj)

      if (entitiAlredyExist){
        return console.error("ENTIDADE EXISTENTE");
      }
             
      const newEntiti = await this.entidadeRepository.create(data)
      return newEntiti
    
}
}