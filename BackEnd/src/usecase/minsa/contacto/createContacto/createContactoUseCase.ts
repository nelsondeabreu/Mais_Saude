import { IContatoDTO } from "../../../../repositories/minsa/IContactoRepository";
import { ContactoRepository } from "../../../../repositories/minsa/implements/ContactoRepository";




export class CreateContactoUseCase {

  constructor(private contactoRepository: ContactoRepository){}

  async execute(data:IContatoDTO){

    const contacto = await this.contactoRepository.create(data)

    return contacto

  }

}