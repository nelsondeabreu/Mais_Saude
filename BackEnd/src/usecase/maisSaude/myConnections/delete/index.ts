import { MyConnectionsRepository } from "../../../../repositories/maisSaude/Implements/MyConnectionsRepository";
import { DeleteMyConnectionController } from "./deleteMyConnectionController";
import { DeleteMyConnectionUseCase } from "./deleteMyConnectionUseCase";



const myConnectionsRepository = new MyConnectionsRepository();
const deleteMyConnectionUseCase =  new DeleteMyConnectionUseCase(myConnectionsRepository);
export const deleteMyConnectionController = new DeleteMyConnectionController(deleteMyConnectionUseCase);