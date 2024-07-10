import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository"



export class FindByIDUseCase {
  
  constructor(private entitiesRepository: EntidadeSistemRepository){}

  async execute (id: string) {

    const entidade = await this.entitiesRepository.findByID(id)

    return entidade

  }

}