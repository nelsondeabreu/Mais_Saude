import { MyConnectionsRepository } from "../../../../repositories/maisSaude/Implements/MyConnectionsRepository";
import { CreateMyConnectionsController } from "./createMyConnectionsController";
import { CreateMyConnectionsUseCase } from "./createMyConnectionsUseCase";



const myConnectionsRepository = new MyConnectionsRepository();
const createMyConnectionsUseCase = new CreateMyConnectionsUseCase(myConnectionsRepository);
export const createMyConnectionsController =  new CreateMyConnectionsController(createMyConnectionsUseCase)