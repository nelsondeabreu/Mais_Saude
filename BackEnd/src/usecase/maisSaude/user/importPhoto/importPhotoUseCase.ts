import { UserRepository } from "../../../../repositories/maisSaude/Implements/UserRepository";

export class ImportPhotoUseCase {

  constructor(private userRepository:UserRepository){}

  async execute(foto:string, id:string){

    const uploudPhoto = await this.userRepository.addImage(foto,id)
    return uploudPhoto
  }
}