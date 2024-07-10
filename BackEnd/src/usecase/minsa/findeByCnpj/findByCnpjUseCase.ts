import { EntidadesMinsaRepository } from "../../../repositories/minsa/implements/EntidadesRepository"


export class FindByCnpjUseCase {

  constructor(private entidadesRepository: EntidadesMinsaRepository){}

  async execute (cnpj: string) {

    const entidade = await this.entidadesRepository.findByCnpj(cnpj)

    return entidade

  }

}
