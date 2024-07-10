import { MyConnectionsRepository } from "../../../../repositories/maisSaude/Implements/MyConnectionsRepository";
import { AcceptPedidoDeConexaoController } from "./acceptPedidoDeConexaoController";
import { AcceptPedidoDeConexaoUseCase } from "./acceptPedidoDeConexaoUseCase";




const myConnectionsRepository = new MyConnectionsRepository();

const acceptPedidoDeConexaoUseCase = new AcceptPedidoDeConexaoUseCase(myConnectionsRepository);
export const acceptPedidoDeConexaoController = new AcceptPedidoDeConexaoController(acceptPedidoDeConexaoUseCase);