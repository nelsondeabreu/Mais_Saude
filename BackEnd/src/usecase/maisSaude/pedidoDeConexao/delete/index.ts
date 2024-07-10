import { PedidoDeConexaoRepository } from "../../../../repositories/maisSaude/Implements/PedidoDeConexaoRepository";
import { DeletePedidoController } from "./deletePedidoController";
import { DeletePedidoUseCase } from "./deletePedidoUseCase";




const pedidoDeConexaoRepository = new PedidoDeConexaoRepository();
const deletePedidoUseCase = new DeletePedidoUseCase(pedidoDeConexaoRepository);
export const deletePedidoController =  new DeletePedidoController(deletePedidoUseCase)
