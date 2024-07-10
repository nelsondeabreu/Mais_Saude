import { AdressRepository } from "../../../../repositories/maisSaude/Implements/AdressRepository";




export class CreateAdressUseCase {

  constructor(private adressRepository: AdressRepository){}

  async execute(adress: string) {

    const newAdress = await this.adressRepository.create(adress);
    return newAdress;
    
  }
}