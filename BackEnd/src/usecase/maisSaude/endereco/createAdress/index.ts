import { AdressRepository } from "../../../../repositories/maisSaude/Implements/AdressRepository";
import { CreateAdressController } from "./CreateAdressController";
import { CreateAdressUseCase } from "./CreateAdressUseCase";




const adressRepository =  new AdressRepository()
const createAdressUseCase = new CreateAdressUseCase(adressRepository);
export const createAdressController = new CreateAdressController(createAdressUseCase)