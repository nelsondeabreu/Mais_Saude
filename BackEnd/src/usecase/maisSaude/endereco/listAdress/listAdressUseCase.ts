import { AdressRepository } from "../../../../repositories/maisSaude/Implements/AdressRepository";




export class ListAdressUseCase {

  constructor(private adressRepository: AdressRepository){}

  async execute() {

    const allAdress = await this.adressRepository.list();
    return allAdress;
  }
  
}