import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository";





export class FindByCnpjUseCase {

  constructor(private entitiesRepository: EntidadeSistemRepository){}

  async execute (cnpj: string) {

    const entidade = await this.entitiesRepository.findByCnpj(cnpj)

    return entidade

  }
}