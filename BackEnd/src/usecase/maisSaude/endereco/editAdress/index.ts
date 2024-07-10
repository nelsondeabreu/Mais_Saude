import { AdressRepository } from "../../../../repositories/maisSaude/Implements/AdressRepository"
import { EditAdressController } from "./editAdressController"
import { EditAdressUseCase } from "./editAdressUseCase"



const adressRepository =  new AdressRepository()
const editAdressUseCase = new EditAdressUseCase(adressRepository)
export const editAdressController =  new EditAdressController(editAdressUseCase)