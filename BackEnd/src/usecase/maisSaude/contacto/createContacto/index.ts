import { ContactoRepository } from "../../../../repositories/maisSaude/Implements/ContactoRepository";
import { CreateContactoController } from "./createContactoController";
import { CreateContactoUseCase } from "./createContactoUseCase";




const contactoRepository =  new ContactoRepository();
const createContactoUseCase =  new CreateContactoUseCase(contactoRepository);
export const createContactoController = new CreateContactoController(createContactoUseCase);