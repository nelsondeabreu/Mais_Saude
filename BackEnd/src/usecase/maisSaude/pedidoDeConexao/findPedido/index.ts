import { PedidoDeConexaoRepository } from "../../../../repositories/maisSaude/Implements/PedidoDeConexaoRepository";
import { FindPedidoController } from "./findPedidoController";
import { FindPedidoUseCase } from "./findPedidoUseCase";




const pedidoDeConexaoRepository = new PedidoDeConexaoRepository();
const findPedidoUseCase = new FindPedidoUseCase(pedidoDeConexaoRepository)
export const findPedidoController = new FindPedidoController(findPedidoUseCase)
