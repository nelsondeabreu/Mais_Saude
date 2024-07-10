import { ContactoRepository } from "../../../../repositories/maisSaude/Implements/ContactoRepository";
import { EditContactoController } from "./editContactoController";
import { EditContactoUseCase } from "./editContactoUseCase";


const contactoRepository =  new ContactoRepository();
const editContactoUseCase = new EditContactoUseCase(contactoRepository);
export const editContactoController =  new EditContactoController(editContactoUseCase);