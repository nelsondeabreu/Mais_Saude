import { PedidoDeConexaoRepository } from "../../../../repositories/maisSaude/Implements/PedidoDeConexaoRepository";
import { CreatePedidoDeConexaoController } from "./createPedidoDeConexaoController";
import { CreatePedidoDeConexaoUseCase } from "./createPedidoDeConexaoUseCase";




const pedidoDeConexaoRepository = new PedidoDeConexaoRepository();
const createPedidoDeConexaoUseCase = new CreatePedidoDeConexaoUseCase(pedidoDeConexaoRepository);
export const createPedidoDeConexaoController =  new CreatePedidoDeConexaoController(createPedidoDeConexaoUseCase);
