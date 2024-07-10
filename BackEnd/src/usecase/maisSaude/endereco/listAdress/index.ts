import { AdressRepository } from "../../../../repositories/maisSaude/Implements/AdressRepository";
import { ListAdressController } from "./listAdressController";
import { ListAdressUseCase } from "./listAdressUseCase";




const adressRepository = new AdressRepository();
const listAdressUseCase = new ListAdressUseCase(adressRepository);
export const listAdressController = new ListAdressController(listAdressUseCase)