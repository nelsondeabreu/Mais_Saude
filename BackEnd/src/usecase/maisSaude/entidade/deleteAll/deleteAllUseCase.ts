import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository";





export class DeleteAllUseCase {

  constructor(private entidadeSistemRepository: EntidadeSistemRepository){}

  async execute () {
    const deleteAll = await this.entidadeSistemRepository.deleteAll();
    return deleteAll
  }
}