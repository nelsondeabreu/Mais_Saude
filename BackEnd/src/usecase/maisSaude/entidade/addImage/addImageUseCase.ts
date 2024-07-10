import { EntidadeSistemRepository } from "../../../../repositories/maisSaude/Implements/EntidadeRepository";

export class AddImageUseCase {

  constructor(private entidadeRepository:EntidadeSistemRepository){}

  async execute(id:string,foto:string){
    const uploudPhoto = await this.entidadeRepository.addImage(id,foto)
    return uploudPhoto
  }
}