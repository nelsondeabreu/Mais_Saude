import { MyConnectionsRepository } from "../../../../repositories/maisSaude/Implements/MyConnectionsRepository";
import { FindUserAndController } from "./findUserAndController";
import { FindUserAndFriendUseCase } from "./findUserAndFriendUseCase";



const myConnectionsRepository = new MyConnectionsRepository();
const findUserAndFriendUseCase = new FindUserAndFriendUseCase(myConnectionsRepository)
export const findUserAndFriendController = new FindUserAndController(findUserAndFriendUseCase)