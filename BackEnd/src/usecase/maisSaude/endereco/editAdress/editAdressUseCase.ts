import { AdressRepository } from "../../../../repositories/maisSaude/Implements/AdressRepository";



export class EditAdressUseCase {

  constructor (private adressRepository: AdressRepository){}

  async execute(id:string, adress: string) {

    try{
      const edit = await this.adressRepository.edit(id,adress)
      return edit
    }
    catch(error) {
      return console.error(error);
      
    }
  }
}