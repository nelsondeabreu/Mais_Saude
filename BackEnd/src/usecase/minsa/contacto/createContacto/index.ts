import { ContactoRepository } from "../../../../repositories/minsa/implements/ContactoRepository";
import { CreateContactoController } from "./createContactoController";
import { CreateContactoUseCase } from "./createContactoUseCase";




const contactoRepository = new ContactoRepository();
const createContactoUseCase = new CreateContactoUseCase(contactoRepository)
export const createContactoController = new CreateContactoController(createContactoUseCase)