import { ContactoRepository } from "../../../../repositories/maisSaude/Implements/ContactoRepository";





export class ListContactsUseCase {
  
  constructor(private contactoRepository: ContactoRepository){}

  async execute () {

    const allContacts = await this.contactoRepository.list();
    return allContacts;

  }
}