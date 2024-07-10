import { PedidoDeConexaoRepository } from "../../../../repositories/maisSaude/Implements/PedidoDeConexaoRepository";
import { FindPedidoWebController } from "./findPedidoWebController";
import { FindPedidoWebUseCase } from "./findPedidoWebUseCase";




const pedidoDeConexaoRepository = new PedidoDeConexaoRepository();
const findPedidoWebUseCase = new FindPedidoWebUseCase(pedidoDeConexaoRepository)
export const findPedidoWebController = new FindPedidoWebController(findPedidoWebUseCase)
