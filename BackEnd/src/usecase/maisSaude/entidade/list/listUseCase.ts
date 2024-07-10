import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository";




export class ListUseCase {

  constructor(private entidadesSistemaRepository: EntidadeSistemRepository){}

  async execute (){
    const allEntities = await this.entidadesSistemaRepository.list()

    return allEntities;
  }
}