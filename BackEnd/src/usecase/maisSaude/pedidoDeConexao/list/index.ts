import { PedidoDeConexaoRepository } from "../../../../repositories/maisSaude/Implements/PedidoDeConexaoRepository";
import { ListPedidoDeConexaoController } from "./listPedidoDeConexaoController";
import { ListPedidoDeConexaoUseCase } from "./listPedidoDeConexaoUseCase";




const pedidoDeConexaoRepository = new PedidoDeConexaoRepository();
const listPedidoDeConexaoUseCase = new ListPedidoDeConexaoUseCase(pedidoDeConexaoRepository);
export const listPedidoDeConexaoController = new ListPedidoDeConexaoController(listPedidoDeConexaoUseCase);
