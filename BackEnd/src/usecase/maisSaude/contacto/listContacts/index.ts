import { ContactoRepository } from "../../../../repositories/maisSaude/Implements/ContactoRepository";
import { ListContactsController } from "./listContactsController";
import { ListContactsUseCase } from "./listContactsUseCase";





const contactoRepository = new ContactoRepository();
const listContactsUseCase = new ListContactsUseCase(contactoRepository);
export const listContactsController = new ListContactsController(listContactsUseCase)

