import { IContatoDTO } from "../../../../repositories/maisSaude/IContactoRepository";
import { ContactoRepository } from "../../../../repositories/maisSaude/Implements/ContactoRepository";




export class CreateContactoUseCase {

  constructor(private contactoRepository: ContactoRepository){}

  async execute(data: IContatoDTO){

    const newContacto = await this.contactoRepository.create(data)
    return newContacto;
    
  }
}