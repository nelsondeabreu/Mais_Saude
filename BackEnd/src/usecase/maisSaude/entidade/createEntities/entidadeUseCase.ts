import { error } from "console";
import { IEntidadeSitemaDTO } from "../../../../repositories/maisSaude/IEntidadeRepository";
import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository";






export class EntidadeUseCase {

  constructor(private entidadeSistemaRepository: EntidadeSistemRepository){}

  async execute (data: IEntidadeSitemaDTO) {
    
    try{

      const entityAlredyExist = await this.entidadeSistemaRepository.findByCnpj(data.cnpj)

      if(entityAlredyExist)
        return "Essa entidade já existe";
      
      const entidade = await this.entidadeSistemaRepository.create(data)
      return entidade

    }
    catch (erro){
      console.error(erro);
    }

  }
}