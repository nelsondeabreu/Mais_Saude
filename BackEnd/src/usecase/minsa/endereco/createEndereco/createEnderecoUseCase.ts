import { EnderecoRepository } from "../../../../repositories/minsa/implements/EnderecoRepository";




export class CreateEnderecoUseCase {

  constructor (private enderecoRepository: EnderecoRepository){}

  async execute (adress: string) {

    const endereco = await this.enderecoRepository.create(adress)

    return endereco;
  }
}