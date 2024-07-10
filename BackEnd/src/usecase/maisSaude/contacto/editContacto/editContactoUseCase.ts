import { IContatoDTO } from "../../../../repositories/maisSaude/IContactoRepository";
import { ContactoRepository } from "../../../../repositories/maisSaude/Implements/ContactoRepository";



export class EditContactoUseCase {

  constructor(private contactoRepository: ContactoRepository){}

  async execute (id:string, data: IContatoDTO) {
    const edit = await this.contactoRepository.edit(id,data)
    return edit
  }
}