import { PedidoDeConexaoRepository } from "../../../../repositories/maisSaude/Implements/PedidoDeConexaoRepository";
import { FindByDestinatarioIDController } from "./findByDestinatarioIDController";
import { FindByDestinatarioIDUseCase } from "./findByDestinatarioIDUseCase";



const pedidoRepository = new PedidoDeConexaoRepository()
const findByDestinatarioIDUseCase = new FindByDestinatarioIDUseCase(pedidoRepository)
export const findByDestinatarioIDController = new FindByDestinatarioIDController(findByDestinatarioIDUseCase)