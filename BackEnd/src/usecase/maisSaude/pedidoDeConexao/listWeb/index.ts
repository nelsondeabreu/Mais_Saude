import { PedidoDeConexaoRepository } from "../../../../repositories/maisSaude/Implements/PedidoDeConexaoRepository";
import { ListPedidoDeConexaoWebController } from "./listPedidoDeConexaoWebController";
import { ListPedidoDeConexaoWebUseCase } from "./listPedidoDeConexaoWebUseCase";




const pedidoDeConexaoRepository = new PedidoDeConexaoRepository();
const listPedidoDeConexaoUseCase = new ListPedidoDeConexaoWebUseCase(pedidoDeConexaoRepository);
export const listPedidoDeConexaoWebController = new ListPedidoDeConexaoWebController(listPedidoDeConexaoUseCase);
