import { MyConnectionsRepository } from "../../../../repositories/maisSaude/Implements/MyConnectionsRepository";
import { ListMyConnectionUseCase } from "./listMyConnectionsUseCase";
import { ListMyConnectionController } from "./listMyConnetionsController";



const myConnectionsRepository = new MyConnectionsRepository();
const listMyConnectionsUseCase = new ListMyConnectionUseCase(myConnectionsRepository)
export const listMyConnectionsController =  new ListMyConnectionController(listMyConnectionsUseCase)
